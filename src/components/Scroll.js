import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid #0cc', height: '560px'}}>
			{props.children}
		</div>
		)
};

export default Scroll;