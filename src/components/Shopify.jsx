import styled from "styled-components"
import shopify from '../assets/icons/shopify.icon.svg';
import stars from '../assets/icons/stars.icon.svg';
import content from '../assets/icons/content.icon.svg';
import arrowleft from '../assets/icons/arrow-left.icon.svg';
import arrowright from '../assets/icons/arrow-right.icon.svg';
import avatar from '../assets/icons/avatar.icon.svg';

const Shopify = () => {
  return (
    <ShopifyView>
      <section>
        <div className="left">
          <div className="head">
            <div className="images">
              <img src={shopify} alt="Shopify" />
              <img src={stars} alt="stars" />
            </div>
            <p>
            ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
            </p>
          </div>

          <div className="flex">
            <div className="profile">
              <img src={avatar} alt="" />
              <div className="info">
                <p className="title">Sarah Thompson</p>
                <p className="role">Project Manager, Shopify</p>
              </div>
            </div>

            <div className="btn">
              <button>
                <img src={arrowleft} alt="" />
              </button>
              <button>
                <img src={arrowright} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={content} alt="" />
        </div>
      </section>
    </ShopifyView>
  )
}

export default Shopify

const ShopifyView = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
  
  section {
    margin: 0 6rem;
    padding: 7rem 0;
    display: flex;

    .left {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .head {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .images {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          img {
            width: 25%;
          }
        }

        p {
          font-size: 2.2rem;
          width: 86%;
          margin: 2rem 0;
        }
      }

      .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .profile {
          display: flex;
          gap: 1rem;

          .info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .title {
              font-weight: 500;
              font-size: 18px;
            }

            .role {
              font-size: 16px;
              color: ${({theme}) => theme.colors.text2};
            }
          }
        }

        .btn {
          display: flex;
          gap: 1.5rem;
  
          button {
            width: 3rem;
            height: 3rem;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${({theme}) => theme.colors.border3};
            background-color: ${({theme}) => theme.colors.white};
          }
        }
      }

    }
  }

`;