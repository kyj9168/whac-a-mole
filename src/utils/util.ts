const generateMoles = (row: number, column: number) => {
	return [...Array(row * column)].map((v, i) => i).sort(() => Math.random() - 0.5);
};

const randomNumber = (moles: number[], moleValue: number) => {
	let randomIndexArray = [];
	for (let i = 0; i < moleValue; i++) {
		let randomNum = Math.floor(Math.random() * moles.length);
		randomIndexArray.push(randomNum);
	}
	return randomIndexArray;
};

const audio = () => {
	const doh = new Audio(`/audio/doh.mp3`);
	const ow = new Audio(`/audio/ow.mp3`);
	const ya = new Audio(`/audio/ya.mp3`);

	switch (Math.floor(Math.random() * 3)) {
		case 0:
			doh.play();
			break;
		case 1:
			ow.play();
			break;
		case 2:
			ya.play();
			break;

		default:
			doh.play();
			break;
	}
};

export { generateMoles, audio, randomNumber };
