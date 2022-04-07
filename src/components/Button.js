import react from "react";
import styled from "styled-components";

const S = {
    Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 423px;
    height: 50px;
    background-color: #413fb5;
    margin-left: 20px;
    border: solid #413fb5;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
    tranistion: 1s;
    :hover {
        opacity: 0.8;
    }
    `,
    StyledText: styled.div`
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    `,
};

const Button = () => {
    return (
        <S.Wrapper>
            <S.StyledText>
                Zarejestruj się za darmo
            </S.StyledText>
        </S.Wrapper>
    );
}

export default Button;