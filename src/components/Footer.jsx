import styled from "styled-components";
import SocialMedia from "../assets/icons/socials.icon.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <FooterView>
      <div className="top">
        <div className='left'>
          <Logo />

          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        <div className='right'>

        </div>
      </div>

      <div className="bottom">
        <p>&copy; 2023 ClearLink. All rights reserved</p>
        <img src={SocialMedia} alt="Social Media Image" />
      </div>
    </FooterView>
  );
};

export default Footer;

const FooterView = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      p {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
