import {
  HeaderContainer,
  LogoImage,
  ProfileWrapper
} from "components/Header/Header.style";
import logo from "assets/logo.svg";
import profilePic from "assets/profile.svg";

function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={logo} alt="Shopping.com" />
      <ProfileWrapper>
        <img src={profilePic} alt="User" />
        <span>Guest</span>
      </ProfileWrapper>
    </HeaderContainer>
  );
}

export default Header;
