import React from 'react';

const Option = (props) => (
    <li>{props.option}
        <button onClick={(e) => {
            props.handleRemove(props.option)
        }}>
            Remove
        </button>
    </li>
);

export default Option;