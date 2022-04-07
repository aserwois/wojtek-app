import react from "react";
import styled from "styled-components";

import LeftBox from "./LeftBox";
import gym from "../Images/gym.jpg";

const S = {
  Wrapper: styled.div`
    border: solid #000000;
    height: 800px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #ffffff;
    border-radius: 2%;
    overflow: hidden;
  `,
  RightBox: styled.div`
    height: 100%;
    width: 50%;
  `,
  GymIcon: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 2%;
    border-bottom-right-radius: 2%;
  `,
};

const Container = () => {
  return (
    <S.Wrapper>
      <LeftBox />
      <S.RightBox>
        <S.GymIcon src={gym} alt="gym" />
      </S.RightBox>
    </S.Wrapper>
  );
};

export default Container;
