import React from 'react';
import styled from 'styled-components';
import { TextboxLabel } from './TextboxWrapper';

const CheckboxContainer = styled.div`
    width: auto;
    height: 350px;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
`;

const RadioButton = styled.input`
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    outline: none;
    border: 2px solid #6f6f6f;
    :before {
        content: '';
        display: block;
        width: 60%;
        height: 60%;
        margin: 20% auto;
        border-radius: 50%;
    }
    :disabled{
        background: #6f6f6fad;
    }
    :enabled{
        transform: scale(1.1);
        border: 1.5px solid #6f6f6f;
    }
    :checked:before {
        background: #FF4B5A;
    }
    
`;

function anyShouldBeEnabled (state) {
    const myStateArr = Object.values(state).slice(0,3);
    return myStateArr.filter(x=>x).length > 1;
}

function RadioWrapper(props) {
    const { onRadioClick, stateData } = props;
    return(
    <CheckboxContainer>
        <div>
            <TextboxLabel>Mobile</TextboxLabel>
            <RadioButton
                type="radio"
                name="contact"
                value="mobileInput"
                disabled={!stateData.mobile}
                checked={stateData.mobileInput}
                onClick={onRadioClick}
            />
        </div>
        <div>
            <TextboxLabel>Home</TextboxLabel>
            <RadioButton
                type="radio"
                name="contact"
                value="homeInput"
                disabled={!stateData.home}
                checked={stateData.homeInput}
                onClick={onRadioClick}
            />
        </div>
        <div>
            <TextboxLabel>Email</TextboxLabel>
            <RadioButton
                type="radio"
                name="contact"
                value="emailInput"
                disabled={!stateData.email}
                checked={stateData.emailInput}
                onClick={onRadioClick}
            />
        </div>
        <div>
            <TextboxLabel>Any</TextboxLabel>
            <RadioButton
                type="radio"
                name="contact"
                value="anyInput"
                disabled={!anyShouldBeEnabled(stateData)}
                checked ={stateData.anyInput}
                onClick={onRadioClick}
            />
        </div>
    </CheckboxContainer>
    );
}

export default RadioWrapper;