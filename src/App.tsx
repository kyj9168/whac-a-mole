import React from 'react';

import Main from './components/page/Main';
import { RootState } from './store/reducer';
import { GameState } from './slice/gameState';
import { useSelector } from 'react-redux';
import Game from 'src/components/page/Game';
import Rank from './components/page/Rank';

import './styles.css';

const App = () => {
	const gameInfo = useSelector<RootState, GameState>((state) => state.gameState);

	const playing = gameInfo.playing;
	const finished = gameInfo.finished;

	return (
		<>
			<img className='grass' src="/images/grass2.png" alt="grass" />
			{!playing && !finished && <Main />}
			{playing && <Game />}
			{finished && <Rank />}
		</>
	);
};

export default App;
