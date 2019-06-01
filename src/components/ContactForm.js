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

    render () {
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
                                <Textbox type="number" pattern="[0-9]{4}-[0-9]{6}"/>
                            </TextboxLabelContainer>
                            <TextboxLabelContainer>
                                <TextboxLabel>Home number</TextboxLabel>
                                <Textbox type="number" pattern="[0-9]{4}-[0-9]{6}"/>
                            </TextboxLabelContainer>
                            <TextboxLabelContainer>
                                <TextboxLabel>Email</TextboxLabel>
                                <Textbox type="email" pattern=".+@globex.com"/>
                            </TextboxLabelContainer>
                        </TextboxInnerWrapper>
                    </TextboxContainer>
                    <CheckboxContainer>
                        <div>
                            <TextboxLabel>Mobile</TextboxLabel>
                            <input type="radio" name="contact" disabled="true"/>
                        </div>
                        <div>
                            <TextboxLabel>Home</TextboxLabel>
                            <input type="radio" name="contact" disabled="true"/>
                        </div>
                        <div>
                            <TextboxLabel>Email</TextboxLabel>
                            <input type="radio" name="contact" disabled="true"/>
                        </div>
                        <div>
                            <TextboxLabel>Any</TextboxLabel>
                            <input type="radio" name="contact" disabled="true"/>
                        </div>
                    </CheckboxContainer>
                </FormsContainer>
            </FormsExternalWrapper>
        )};
}

export default ContactForm;
