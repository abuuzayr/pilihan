import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button
            onClick={props.removeAll}
        >
            Remove All
            </button>
        {props.options.length === 0 && <p>No options here!</p>}
        <ol>
            {
                props.options.map((option) => {
                    return (
                        <Option
                            key={option}
                            option={option}
                            handleRemove={props.removeOne}
                        />
                    )
                })
            }
        </ol>
    </div>
);

export default Options;