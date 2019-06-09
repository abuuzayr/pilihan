import React from 'react';

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
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                    {this.state.error && <p>Error: {this.state.error}</p>}
                </form>
            </div>
        );
    }
}