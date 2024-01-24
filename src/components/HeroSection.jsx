import styled from "styled-components";
import Navbar from "./Navbar";
import heroImage from "../assets/icons/hero-image.svg";
import ai from '../assets/icons/ai.icon.svg';
import reviews from '../assets/icons/reviews.icon.svg';
import shopify from '../assets/icons/shopify.icon.svg';
import coinbase from '../assets/icons/coinbase.icon.svg';
import dropbox from '../assets/icons/dropbox.icon.svg';
import intercom from '../assets/icons/intercom.icon.svg';
import marvel from '../assets/icons/marvel.icon.svg';
import automattic from '../assets/icons/automattic.icon.svg';

const HeroSection = () => {
  const icons = [
    {
      id: 1,
      image: shopify,
    },
    {
      id: 2,
      image: coinbase,
    },
    {
      id: 3,
      image: dropbox,
    },
    {
      id: 4,
      image: intercom,
    },
    {
      id: 5,
      image: marvel,
    },
    {
      id: 6,
      image: automattic,
    }
  ]

  return (
    <HeroView>
      <Navbar />
      <div className="flex">
        <div className='left'>
          <div className="text">
            <p className='title'>Uniting the world, one video call at a time</p>
            <p className='description'>
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>

          <div className="cta">
            <div className="cta-btn">
              <button>Start your free trial</button>

              <div className="cta-text">
                <img src={ai} alt="" />
                <p>Discover AI Assistant</p>
              </div>
            </div>

            <div className="reviews">
              <img src={reviews} alt="" />
            </div>
          </div>
        </div>

        <div className='image'>
          <img src={heroImage} alt="" />
        </div>
      </div>

      <div className='icon-section'>
        <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
        <div className='icon-wrapper'>
          {icons.map((icon) => {
            return (
              <div key={icon.id}>
                <img src={icon.image} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </HeroView>
  );
};

export default HeroSection;

const HeroView = styled.div`
  margin: 0 6rem;

  .flex {
    display: flex;
    align-items: center;
    margin: 5rem 0;

    .left {
      width: 50%;

      .text {
        .title {
          width: 90%;
          font-size: 50px;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .description {
          width: 96%;
          margin-bottom: 2rem;
          font-size: 22px;
          line-height: 32px;
          color: ${({ theme }) => theme.colors.text};
        }
      }

      .cta {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .cta-btn {
          display: flex;
          gap: 1rem;

          button {
            border: none;
            padding: 1rem 1.5rem;
            border-radius: 100px;
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.blue};
          }

          .cta-text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${({theme}) => theme.colors.blue};
          }

        }
      }
    }

    .image {
      width: 50%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .icon-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 10rem;
    gap: 2rem;

    p {
      font-size: 18px;
      color: ${({theme}) => theme.colors.text2};
    }

    .icon-wrapper {
      width: 100%;
      display: flex;

      div {
        width: 24%;
        height: 2rem;
        padding: 0 2rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
