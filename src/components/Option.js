import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    color: white;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
    word-break: break-all;
`

const Li = styled.li`
    border-bottom: 1px solid var(--light-blue);
    display: flex;
    justify-content: space-between;
    padding: var(--l-size) var(--m-size);
`

const Button = styled.button`
    background: var(--purple);
    border: none;
    border-bottom: .3rem solid darken(var(--purple), 10%);
    color: white;
    font-weight: 500;
    padding: var(--s-size);
`

const Option = (props) => (
    <Li>
        <Text>
            {props.option}
        </Text>
        <Button onClick={(e) => {
            props.handleRemove(props.option)
        }}>
            Remove
        </Button>
    </Li>
);

export default Option;