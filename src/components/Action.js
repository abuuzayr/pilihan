import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: var(--red);
    border: none;
    border-bottom: .6rem solid var(--underred);
    color: white;
    font-weight: bold;
    font-size: var(--l-size);
    margin-bottom: var(--m-size);
    padding: 2.4rem;
    width: 100%;
    
    &:disabled {
        opacity: .5;
    }

    @media (min-width: 45rem) {
        .big-button {
            margin-bottom: var(--xl-size);
        }
    }

    ${props => props.isLink && css`
        background: none;
        border: none;
        color: var(--off-white);
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