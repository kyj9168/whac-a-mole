import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/reducer';

const Score = (props: any) => {
	const score = useSelector<RootState, number>((state) => state.score.value);

	return <div className="info-text">{`점수: ${score}`}</div>;
};

export default Score;
