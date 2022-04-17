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
	const audios = ['doh', 'ow', 'ya'];

	new Audio(`/audio/${audios[Math.floor(Math.random() * 3)]}.mp3`).play();
};

export { generateMoles, audio, randomNumber };
