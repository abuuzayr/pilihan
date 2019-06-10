import React from 'react';
import styled from 'styled-components';

const ErrorMsg = styled.p`
    color: var(--off-white);
    font-style: italic;
    margin: var(--m-size) 0 0 0;
    padding: 0 var(--m-size);
`

const Button = styled.button`
    background: var(--purple);
    border: none;
    border-bottom: .3rem solid darken(var(--purple), 10%);
    color: white;
    font-weight: 500;
    padding: var(--s-size);
`

const Input = styled.input`
    background: var(--dark-blue);
    border: none;
    color: var(--off-white);
    border-bottom: .3rem solid var(--dark-blue);
    flex-grow: 1;
    margin: 0 0 var(--s-size) 0;
    padding: var(--s-size);

    @media (min-width: 45rem) {
        margin: 0 var(--s-size) 0 0;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: var(--m-size);
    background: var(--light-blue);

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export default class AddOption extends React.Component {
    state = {
        error: ''
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(value);
        if (error) {
            this.setState({ error });
        } else {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <Input type="text" name="option" />
                    <Button type="submit">Add Option</Button>
                    {this.state.error && <ErrorMsg>Error: {this.state.error}</ErrorMsg>}
                </Form>
            </div>
        );
    }
}