import react from "react";
import styled, { css } from "styled-components";

const basicStyles = css`
  display: flex;
  align-items: center;
  justify-items: space-between;
  width: 100%;
  height: 40px;
`;

const S = {
  Wrapper: styled.div`
    ${basicStyles};
    margin: 0px;
  `,
  StyledInput: styled.input`
    ${basicStyles};
    border: 1px solid lightgrey;
    border-radius: 5px;
    font-size: 20px;
    padding: 30px 10px;
    box-sizing: border-box;
  `,
};

const IdBox = ({ text, className }) => {
  return (
    <S.StyledInput
      className={className}
      type="text"
      id="fname"
      name="fname"
      placeholder={text}
    />
  );
};

export default IdBox;
