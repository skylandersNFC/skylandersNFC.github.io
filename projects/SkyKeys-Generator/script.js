function computeCRC48(data) {
    const polynomial = BigInt("0x42f0e1eba9ea3693");
    const initialRegisterValue = BigInt("0x204500015254A");

    let register = initialRegisterValue;
    for (let i = 0; i < data.length; i++) {
        register ^= BigInt(data[i]) << BigInt(40);
        for (let j = 0; j < 8; j++) {
            if ((register & BigInt(0x800000000000)) !== BigInt(0)) {
                register = (register << BigInt(1)) ^ polynomial;
            } else {
                register <<= BigInt(1);
            }

            register &= BigInt(0x0000FFFFFFFFFFFF);
        }
    }
    return register;
}

function getKeyA(sector, uid) {
    if (sector == 0) {
        return (73 * 2017 * 560381651).toString(16);
    }

    if (sector < 0 || sector > 15) {
        throw new Error("Sector index out of range");
    }

    let uidWithSector = uid.slice();
    uidWithSector.push(sector);

    const crc48 = computeCRC48(uidWithSector);

    return crc48.toString(16).padStart(12, "0").match(/.{1,2}/g).reverse().join("");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const keyList = document.getElementById("key-list");
    const nuidInput = document.getElementById("nuid-input");
    const downloadBtn = document.getElementById("download-btn");

    form.onsubmit = (e) => {
        e.preventDefault();

        const uid = nuidInput.value;
        if (!/^[0-9a-fA-F]{8}$/.test(uid)) {
            alert("Please enter a valid 8-character UID (hexadecimal).");
            return;
        }

        keyList.innerText = "";

        const uidBytes = uid.match(/.{2}/g).map(byte => parseInt(byte, 16));
        let keys = [];

        for (let i = 0; i < 16; i++) {
            const key = getKeyA(i, uidBytes);
            keys.push(key);
        }

        keyList.innerText = keys.join("\n");

        downloadBtn.style.display = "block";

        downloadBtn.onclick = () => {
            const blob = new Blob([keys.join("\n")], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${uid}.keys`;
            a.click();
            URL.revokeObjectURL(url);
        }
    }
});
