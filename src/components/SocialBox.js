import react from "react";
import styled from "styled-components";

import SocialButton from "./SocialButton";
import instaIcon from "../Images/instaIcon.png";

const S = {
    Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-left: 20px;
    `,
    SocialRegistration: styled.div`
    border: solid #413fb5;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    width: 440px;
    `,
    Text: styled.div`
    font-weight: bold;
    font-size: 22px;
    `
};

const SocialBox = () => {

    return (
        <S.Wrapper>
            <S.SocialRegistration>
                <SocialButton text="Rejestracja przez Facebook" />
            </S.SocialRegistration>          
            <S.SocialRegistration>
                <SocialButton src={instaIcon} alt = 'IG' text="Rejestracja przez Instagram" />
            </S.SocialRegistration>
        </S.Wrapper>
    );
};

export default SocialBox;

