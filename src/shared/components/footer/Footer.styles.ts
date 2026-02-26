import styled from "styled-components";

export const FooterWrapper = styled.footer<{ $gradient?: string }>`
  width: 100%;
  padding: 60px 32px 66px;
  background: ${(props) =>
    props.$gradient || "linear-gradient(270deg, #06225d 0%, #02011f 37.03%)"};
  display: flex;
  gap: 64px;
  position: relative;

  @media (max-width: 1440px) {
    gap: 40px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 52px;
    padding-left: 27px;
    padding-right: 27px;
    padding-bottom: 40px;
  }

  @media (max-width: 480px) {
    padding-bottom: 48px;
  }

  &:after {
    content: "";
    display: block;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: 32px;
    right: 32px;
    bottom: 12px;
  }
`;

export const FooterLogo = styled.img`
  width: 288px;
  height: auto;

  @media (max-width: 1340px) {
    display: none;
  }
`;

export const DownloadConteiner = styled.div<{
  $borderColor1?: string;
  $borderColor2?: string;
}>`
  padding: 24px;
  max-width: 390px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    const c1 = (props.$borderColor1 || "#FF8D6B").replace("#", "%23");
    return c1;
  }};
  background-image: ${(props) => {
    const c1 = (props.$borderColor1 || "#FF8D6B").replace("#", "%23");
    const c2 = (props.$borderColor2 || "#FFBA47").replace("#", "%23");
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='7.59%25' stop-color='${c1}'/%3E%3Cstop offset='96.71%25' stop-color='${c2}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0.5' y='0.5' width='calc(100%25 - 1px)' height='calc(100%25 - 1px)' rx='16' ry='16' fill='none' stroke='url(%23g)' stroke-width='1' stroke-dasharray='5 4'/%3E%3C/svg%3E")`;
  }};

  @media (max-width: 1200px) {
    order: 1;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 80px;
  margin-bottom: 24px;
`;

export const Heading = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 6px;
`;

export const SubTitle = styled.p`
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 18px;
  color: rgba(186, 186, 186, 1);
`;

export const LegalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  max-width: 350px;

  @media (max-width: 1200px) {
    order: 3;
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LegalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 357px;
  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    max-width: 250px;
    width: 100%;
  }
`;

export const LegalIcon = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;
`;

export const LegalText = styled.span`
  line-height: 22px;
  color: rgba(251, 251, 251, 0.7);
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  margin-left: auto;

  @media (max-width: 1200px) {
    order: 2;
    align-items: center;
    margin-left: 0;
  }
`;

export const SocialLabel = styled.span`
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 4px;
`;

const SocialIconBase = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s
  &:hover {
    opacity: 0.8;
  }
  .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const SocialIconInstagram = styled(SocialIconBase)`
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #d6249f 90%
  );
  border: 1px solid var(--white-white-40, rgba(255, 255, 255, 0.4));
`;

export const SocialIconTelegram = styled(SocialIconBase)`
  background: #2aabee;
  border: 1px solid var(--white-white-40, rgba(255, 255, 255, 0.4));
`;

export const SocialIconTwitter = styled(SocialIconBase)`
  background: black;
  border: 1px solid var(--white-white-40, rgba(255, 255, 255, 0.4));
`;

export const SocialIconEmail = styled(SocialIconBase)`
  background: black;
  border: 1px solid var(--white-white-40, rgba(255, 255, 255, 0.4));
`;

export const LanguageSelectBox = styled.div`
  margin-top: 39px;

  @media (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: 48px;
  }
`;
