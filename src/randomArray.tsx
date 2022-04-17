const randomArray = (totalIndex, selectingNumber) => {
	let randomIndexArray = [];
	for (let i = 0; i < selectingNumber; i++) {
		let randomNum = Math.floor(Math.random() * totalIndex);
		if (randomIndexArray.indexOf(randomNum) === -1) {
			randomIndexArray.push(randomNum);
		} else {
			i--;
		}
	}
	return randomIndexArray;
};

export default randomArray;
