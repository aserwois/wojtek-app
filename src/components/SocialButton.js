import react from "react";
import styled from "styled-components";

const S = {
    Wrapper : styled.div`
        display: flex;
        align-items: center;
        justify-items: space-between;
        cursor: pointer;
        tranistion: 1s;
    :hover {
        opacity: 0.8;
    }
    `,
    StyledImage : styled.img`
       src: ${({src}) => src};
       alt: ${({alt}) => alt};
    `,
    StyledText : styled.div`
    margin-left: 20px;
    font-weight: bold;
    font-size: 22px;
    `
};

const SocialButton = ({src="/photos/fbIcon.png", alt='Fb', text}) => {
    return (
        <S.Wrapper>
            <S.StyledImage src={src} alt={alt} />
            <S.StyledText>{text}</S.StyledText>
        </S.Wrapper>
    );
};

export default SocialButton;