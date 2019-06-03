import React from 'react';
import styled from 'styled-components';

const FormsExternalWrapper = styled.div`
    width: 100%;
    min-height: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormsContainer = styled.div`
    width: 60%;
    min-height: 500px;
    height: 500px;
`;

const TextboxContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
`;

const CheckboxContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-evenly;
`;

const AvatarContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextboxInnerWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Avatar = styled.div`
    width: 70%;
    height: 80%;
    background-color: grey;
`;

const TextboxLabelContainer = styled.div`
    width: 80%;
`;

const TextboxLabel = styled.p`
    margin: 10px 0px 0px;
    font-weight: bold;
`;

const Textbox = styled.input`
    width: 80%;
    height: 35px;
`;

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile: false,
            home: false,
            email: false,
            checked: false,
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);

        this.mobileRef = React.createRef();
    }

    anyIsEnabled = () => {
        const myStateArr = Object.values(this.state).slice(0,3);
        return myStateArr.filter(x=>x).length > 1;
    }

    onChangeValue = (event) => {
        const { name, value } = event.target;

        if (value.length > 0) {
            this.setState({ [name] : true});
        } else this.setState({ [name] : false, checked: false});
    }

    onRadioClick(e) {
        console.log(e.target.value);
    }

    render () {
        console.log(this.state.checked);
        return (
            <FormsExternalWrapper>
                <h1>Your profile</h1>
                <FormsContainer>
                    <TextboxContainer>
                        <AvatarContainer>
                            <Avatar>ProfilePic</Avatar>
                        </AvatarContainer>
                        <TextboxInnerWrapper>
                            <TextboxLabelContainer>
                                <TextboxLabel>Mobile</TextboxLabel>
                                <Textbox type="number" name="mobile" pattern="[0-9]{4}-[0-9]{6}" onChange={this.onChangeValue} />
                            </TextboxLabelContainer>
                            <TextboxLabelContainer>
                                <TextboxLabel>Home number</TextboxLabel>
                                <Textbox type="number" name="home" pattern="[0-9]{4}-[0-9]{6}" onChange={this.onChangeValue}/>
                            </TextboxLabelContainer>
                            <TextboxLabelContainer>
                                <TextboxLabel>Email</TextboxLabel>
                                <Textbox type="email" name="email" pattern=".+@globex.com" onChange={this.onChangeValue}/>
                            </TextboxLabelContainer>
                        </TextboxInnerWrapper>
                    </TextboxContainer>
                    <CheckboxContainer>
                        <div>
                            <TextboxLabel>Mobile</TextboxLabel>
                            <input
                                type="radio"
                                name="contact"
                                value="mobile"
                                ref={this.mobileRef}
                                onClick={this.onRadioClick}
                            />
                        </div>
                        <div>
                            <TextboxLabel>Home</TextboxLabel>
                            <input
                                type="radio"
                                name="contact"
                                value="home"
                                disabled={!this.state.home}
                                onClick={this.onRadioClick}
                            />
                        </div>
                        <div>
                            <TextboxLabel>Email</TextboxLabel>
                            <input
                                type="radio"
                                name="contact"
                                value="email"
                                disabled={!this.state.email}
                                onClick={this.onRadioClick}
                            />
                        </div>
                        <div>
                            <TextboxLabel>Any</TextboxLabel>
                            <input
                                type="radio"
                                name="contact"
                                disabled={!this.anyIsEnabled()}
                                onClick={this.onRadioClick}
                            />
                        </div>
                    </CheckboxContainer>
                </FormsContainer>
            </FormsExternalWrapper>
        )};
}

export default ContactForm;
