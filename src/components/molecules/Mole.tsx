import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { plusScore } from '../../slice/score';
import { RootState } from '../../store/reducer';
import { audio } from 'src/utils/util';

const MoleBtn = styled.input``;

const Mole = (props: any) => {
	const dispatch = useDispatch();

	const inout = props.inout;

	const buttonRef = useRef(null);

	const whack = () => {
		buttonRef.current.className = 'mole in';
		dispatch(plusScore(100));
		audio();
	};

	return (
		<div className="mole-hole">
			<input type="button" className={inout ? 'mole out' : 'mole in'} ref={buttonRef} onClick={whack} />
			<img className="dirt_img" src="/images/dirt.png" />
		</div>
	);
};

export default React.memo(Mole);
