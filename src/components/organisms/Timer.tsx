import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducer';
import { setTime } from 'src/slice/time';
import { setPlaying, setFinished } from 'src/slice/gameState';
const Timer = () => {
	const dispatch = useDispatch();
	const time = useSelector<RootState, number>((state) => state.time.value);

	useEffect(() => {
		if (time === 0) {
			dispatch(setPlaying(false));
			dispatch(setFinished(true));
		}
	}, [time]);

	setTimeout(() => {
		dispatch(setTime(time - 1000));
	}, 1000);

	return <span className="info-text">{`시간: ${time / 1000}s`}</span>;
};

export default Timer;
