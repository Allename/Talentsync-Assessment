import styled from "styled-components";
import SocialMedia from "../assets/icons/socials.icon.svg";
import playstore from "../assets/icons/playstore.icon.svg";
import appstore from "../assets/icons/appstore.icon.svg";
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
          <div className='item'>
            <p>Product</p>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className='item'>
            <p>Company</p>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className='item'>
            <p>Resources</p>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className='item'>
            <p>Legal</p>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="getapp">
            <p>Get the app</p>

            <div className="app-links">
              <img src={playstore} alt="Playstore" />
              <img src={appstore} alt="Appstore" />
            </div>
          </div>
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
    gap: 3rem;
    margin: 0 6rem;

    .left {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-right: 3rem;

      p {
        width: 100%;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .right {
      /* width: 60%; */
      display: flex;
      gap: 5rem;

      .item {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 14px;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.text};
        }

        ul {
          list-style: none;

          li {
            padding: 0.5rem 0;

            a {
              font-size: 15px;
              font-weight: 500;
              text-decoration: none;
              color: ${({ theme }) => theme.colors.text2};
            }
          }
        }
      }

      .getapp {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        p {
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.blue};
        }

        .app-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }

  .bottom {
    margin-top: 3rem;
    padding: 2rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey_100};

    p {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
