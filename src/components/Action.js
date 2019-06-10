import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: var(--purple);
    border: none;
    border-bottom: .3rem solid darken(var(--purple), 10%);
    color: white;
    font-weight: 500;
    padding: var(--s-size);

    ${props => props.isLink && css`
        background: none;
        border: none;
        color: $off-white;
        padding: 0;
    `}
`

const Action = (props) => (
    <div>
        <Button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </Button>
    </div>
);

export default Action;