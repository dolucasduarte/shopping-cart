import styled from "styled-components";

const HeaderContainer = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 7em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  background: #fffdfd;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.3);
`;

const LogoImage = styled.img`
  margin-left: 3em;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-right: 3em;

  color: #565656;
  font-size: 0.9em;
  font-weight: 400;

  img {
    height: 2em;
    margin-right: 0.5em;
  }
`;

export { HeaderContainer, LogoImage, ProfileWrapper };
