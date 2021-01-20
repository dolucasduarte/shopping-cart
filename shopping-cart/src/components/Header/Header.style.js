import styled from "styled-components";

const HeaderContainer = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffff;

  margin-bottom: 2em;
`;

const LogoImage = styled.img`
  margin-left: 2em;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;

  font-size: 0.9em;
  font-weight: 500;

  img {
    height: 2em;
    margin-right: 0.5em;
  }
`;

export { HeaderContainer, LogoImage, ProfileWrapper };
