import React from 'react';

const ClickBtn = (props: any) => {
	const click = props.click || '';
	const children = props.children;

	return (
		<button className={props.class || ''} onClick={() => click()}>
			{children}
		</button>
	);
};

export default ClickBtn;
