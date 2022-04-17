import React from 'react';
import { useDispatch } from 'react-redux';

const NumberSelect = (props: any) => {
	const dispatch = useDispatch();

	const name = props.name || '';
	const min = props.min;
	const max = props.max;
	const numValue = props.numValue;
	const setValue = props.setValue;

	const select = () => {
		const result = [];
		for (let i = min; i <= max; i++) {
			result.push(
				<option key={`option_${i}`} value={i}>
					{i}
				</option>
			);
		}

		return result;
	};

	const handleChange = (e: any) => {
		dispatch(setValue(Number(e.target.value)));
	};

	return (
		<div className="numberSelect">
			{name && <span>{name}</span>}
			<select id="selectNumber" value={numValue} onChange={handleChange}>
				{select()}
			</select>
		</div>
	);
};

export default NumberSelect;
