import React from 'react';
import styled from 'styled-components';
import TextboxWrapper from './TextboxWrapper';
import CheckboxWrapper from './CheckboxWrapper';

const FormsExternalWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormsContainer = styled.div`
    width: 50%;
    min-height: 500px;
    height: 500px;
    color: #6f6f6f;
    display: flex;
`;

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile: false,
            home: false,
            email: false,
            mobileInput: false,
            homeInput: false,
            emailInput: false,
            anyInput: false,
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);
    }

    onChangeValue = (event) => {
        const { name, value } = event.target;
        const stateInput = Object.keys(this.state).filter(
                                function (input) {
                                    return input.indexOf(name)=== 0 
                                }).pop();

        if (value.length > 0) {
            this.setState({ [name] : true});
        } else {
            this.setState({ [name] : false, [stateInput] : false});
            const myStateArr = Object.values(this.state).slice(0,3);
            if(myStateArr.filter(x=>x).length <= 2) {
                this.setState({ anyInput : false });
            }
        }
    }

    onRadioClick(e) {
        const radioValue = e.target.value;
        const myStateArr = Object.keys(this.state).slice(3,this.state.length);
        myStateArr.map(i => this.setState({ [i]:false }));
        this.setState({ [radioValue]:true });
    }


    render () {
        return (
            <FormsExternalWrapper>
                <h1>Your profile</h1>
                <FormsContainer>
                    <TextboxWrapper onChange={this.onChangeValue} stateData = {this.state} />
                    <CheckboxWrapper onRadioClick={this.onRadioClick} stateData={this.state} />
                </FormsContainer>
         </FormsExternalWrapper>
    )};
}

export default ContactForm;
