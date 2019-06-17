import React from 'react';
import Option from './Option';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
    background: var(--light-blue);
`

const Header = styled.div`
    background: var(--blue);
    color: var(--off-white);
    display: flex;
    justify-content: space-between;
    padding: var(--m-size);
`

const HeaderTitle = styled.h3`
    margin: 0;
`

const Message = styled.p`
    border-bottom: 1px solid var(--light-blue);
    color: var(--off-white);
    margin: 0;
    padding: var(--l-size);
    text-align: center;
`

const Button = styled.button`
    background: var(--red);
    border: none;
    border-bottom: .3rem solid var(--underred);
    color: white;
    font-size: 1.5rem;
    padding: var(--s-size);
`

const Options = (props) => (
    <OptionsWrapper>
        <Header>
            <HeaderTitle>
                Your Options
            </HeaderTitle>
            <Button
                onClick={props.removeAll}
            >
            Remove All
            </Button>
        </Header>
        {props.options.length === 0 && <Message>No options here!</Message>}
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
    </OptionsWrapper>
);

export default Options;