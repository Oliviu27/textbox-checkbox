import React from 'react';
import styled from 'styled-components';

const TextboxInnerWrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const TextboxLabel = styled.p`
    margin: 10px 0px 0px;
    font-weight: 700;
    font-size: 14px;
    color: #6f6f6fa8;
`;

const Textbox = styled.input`
    transition-property: width;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
    width: 90%;
    height: 35px;
    border: none;
    border-bottom: ${props => props.active ? '2px solid #FF4B5A' : '2px solid #6f6f6f'};
    :focus{
        outline: none;
    }
    ::placeholder{
        font-style: italic;
        font-weight: 600;
        color: #000000c4;
    }
`;

const FormsWrapper = styled.div`
    width: 100%;
`;

function TextboxWrapper(props) {
    const { onChange,stateData } = props;
    return(
        <TextboxInnerWrapper>
            <FormsWrapper>
                <TextboxLabel>Mobile</TextboxLabel>
                <Textbox 
                    name="mobile"  
                    pattern="^[0-9-+s()]*$"
                    placeholder="Your mobile here"
                    data-radio="mobileInput"
                    onChange={onChange}
                    active={stateData.mobile}
                />
            </FormsWrapper>
            <FormsWrapper>
                <TextboxLabel>Home</TextboxLabel>
                    <Textbox 
                        name="home" 
                        placeholder="Your home number here"
                        data-radio="homeInput"
                        onChange={onChange}
                        active={stateData.home}
                    />
            </FormsWrapper>
            <FormsWrapper>
                <TextboxLabel>Email</TextboxLabel>
                <Textbox type="email"
                    name="email" 
                    placeholder="Your email address here"
                    data-radio="emailInput"
                    pattern=".+@globex.com" 
                    onChange={onChange}
                    active={stateData.email}
                />
            </FormsWrapper>
        </TextboxInnerWrapper>
    );}
export default TextboxWrapper;
