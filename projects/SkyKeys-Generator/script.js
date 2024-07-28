function computeCRC48(data) {
	const polynomial = BigInt("0x42f0e1eba9ea3693");
	const initialRegisterValue = BigInt((2 * 2 * 3 * 1103 * 12868356821).toString());

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

	uid.push(sector);

	const crc48 = computeCRC48(uid);

	return crc48.toString(16).padStart(12, "0").match(/.{1,2}/g).reverse().join("");
}

function crc16(data, offset, length) {
	if (data == null || offset < 0 || offset > data.length - 1 || offset + length > data.length) {
		return 0;
	}

	let crc = 0xFFFF;
	for (let i = 0; i < length; ++i) {
		crc ^= data[offset + i] << 8;
		for (let j = 0; j < 8; ++j) {
			crc = (crc & 0x8000) > 0 ? (crc << 1) ^ 0x1021 : crc << 1;
		}
	}
	return crc & 0xFFFF;
}

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	const keyList = document.getElementById("key-list");
	const nuidInput = document.getElementById("nuid-input");

	form.onsubmit = (e) => {
		e.preventDefault();

		keyList.innerText = "";

		let keys = [];

		for (let i = 0; i < 16; i++) {
			const uidBytes = nuidInput.value.match(/.{2}/g).map(byte => parseInt(byte, 16));
			const key = getKeyA(i, uidBytes);
			keys.push(key);
		}

		for (let i = 0; i < keys.length; i++) {
			keyList.innerText += keys[i];
			if (i != keys.length - 1) {
				keyList.innerText += "\n";
			}
		}
	}
});