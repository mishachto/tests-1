import styled from "styled-components";

export const Wrapper = styled.div<{ $bgImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;
  background: url("${(props) => props.$bgImage}") no-repeat center center;
  background-size: cover;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 462px;
    width: 100%;
    background: linear-gradient(360deg, #000000 20.07%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.7;
    z-index: 0;
  }
`;

export const Logo = styled.img`
  margin-bottom: 48px;
`;

export const HeroImage = styled.img`
  margin-bottom: 32px;
`;
