import react from "react";
import styled, {css} from "styled-components";

const BasicStyles = css`
flex: 1 1;
border-bottom: 1px solid;
font-size: 10px;
padding: 0 5px;
color: #0000ff;
margin: auto;
`;

const S = {
    Line: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 440px;
    margin-left: 20px;
    margin-bottom: 40px;
    `,
    LineBefore: styled.p`
    ${BasicStyles},
    margin-right: 40px;
    `,
    LineAfter: styled.div`
    ${BasicStyles},
    margin-left: 40px;
    `,
    Text: styled.div`
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    `
};

const LineWithText = () => {
    return (
        <S.Line>
            <S.LineBefore />
                <S.Text>Lub za pomocą maila</S.Text> 
            <S.LineAfter /> 
        </S.Line>
    );
};

export default LineWithText;