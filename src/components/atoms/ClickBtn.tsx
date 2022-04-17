import React from 'react';
import { GameInfo, setColumn, setRow, setMoleValue } from '../../slice/gameInfo';
import { useDispatch, useSelector } from 'react-redux';

const ClickBtn = (props: any) => {
	const dispatch = useDispatch();

	const click = props.click || '';
	const children = props.children;

	return <button onClick={() => click()}>{children}</button>;
};

export default ClickBtn;
