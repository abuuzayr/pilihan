import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: var(--purple);
    border: none;
    border-bottom: .6rem solid darken(var(--purple), 10%);
    color: white;
    font-weight: bold;
    font-size: $l-size;
    margin-bottom: $m-size;
    padding: 2.4rem;
    width: 100%;
    
    &:disabled {
        opacity: .5;
    }

    @media (min-width: var(--desktop-breakpoint)) {
        .big-button {
            margin-bottom: var(--xl-size);
        }
    }

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