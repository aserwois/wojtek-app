import react from "react";
import styled, { css } from "styled-components";

import IdBox from "./IdBox";

const flexStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const NameBox = styled(IdBox)`
  & {
    width: 50%;
    margin: 10px;
  }
`;

const S = {
  Wrapper: styled.div`
    ${flexStyles};
    flex-direction: column;
    flex: 1;
    width: 445px;
    margin-left: 20px;
    font-size: 20px;
    color: gray;
    font-family: system-ui;
  `,
  IdSection: styled.div`
    ${flexStyles};
    flex-direction: row;
    width: 100%;
    gap: ${({ isTrues }) => (isTrues ? "40px" : "20px")};
  `,
};

const MailBox = ({ text }) => {
  const isTrue = false;
  return (
    <S.Wrapper>
      <S.IdSection isTrues={isTrue}>
        <IdBox text="First Name..." />
        <IdBox text="Last Name..." />
      </S.IdSection>
      <IdBox text="Email adress..." />
      <IdBox text="Password..." />
    </S.Wrapper>
  );
};

export default MailBox;
