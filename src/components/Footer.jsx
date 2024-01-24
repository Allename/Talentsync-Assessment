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
    /* justify-content: space-between; */
    /* align-items: center; */
    gap: 3rem;
    margin: 0 3rem;

    .left {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      p {
        width: 70%;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.text2};
      }
    }

    .right {
      /* width: 60%; */
      display: flex;
      gap: 3rem;

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
    }
  }

  .bottom {
    margin-top: 3rem;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey_100};

    p {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
