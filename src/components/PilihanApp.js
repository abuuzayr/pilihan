import React from 'react';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import styled from 'styled-components';

const Wrap = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 0 16px;
`

export default class PilihanApp extends React.Component {
    state = {
        options: [],
        option: null
    };
    handleDeleteOptions = () => {
        this.setState({ options: [] });
    }
    handleDeleteOption = (option) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((each) => each !== option)
            }
        })
    }
    handlePick = () => {
        const pick = Math.floor(Math.random() * this.state.options.length);
        this.setState({
            openModal: true,
            option: this.state.options[pick]
        });
    }
    handleAddOption = (msg) => {
        if (!msg) {
            // Goes back to AddOption component
            return 'Please enter a valid value to add item'
        } else if (this.state.options.includes(msg)) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(msg) }));
        // no return value if valid, so variable assigned to this function will be undefined
    }
    handleCloseModal = () => {
        this.setState({
            option: null
        });
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState({ options });
            }
        } catch (e) {
            // Do nothing if JSON valid
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem(
                'options',
                JSON.stringify(this.state.options)
            )
        }
    }
    render() {
        return (
            <div>
                <Header title="Pilihan" />
                <Wrap>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        removeAll={this.handleDeleteOptions}
                        removeOne={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </Wrap>
                <OptionModal
                    modalText={this.state.option}
                    closeModal={this.handleCloseModal}
                />
            </div>
        );
    }
}