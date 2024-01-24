import styled from "styled-components"
import check from "../assets/icons/check-circle.svg";
import background from "../assets/icons/background.svg";

const SubFooter = () => {
  return (
    <SubFooterView>
      <div className='left'>
        <div className='title'>
          <p>
          Ready to clear the path to perfect communication?
          </p>
        </div>

        <div className='points'>
          <div className='point'>
            <img src={check} alt="check" />
            <p>30 days free trial</p>
          </div>
          <div className='point'>
            <img src={check} alt="check" />
            <p>Cancel at anytime</p>
          </div>
          <div className='point'>
            <img src={check} alt="check" />
            <p>Access to all features</p>
          </div>
          <div className='point'>
            <img src={check} alt="check" />
            <p>Personalized onboarding</p>
          </div>
        </div>

        <div className='btn-flex'>
          <button>Talk to sales</button>
          <button className='signup'>Start your free trial</button>
        </div>
      </div>

      <div className='right'>
        <img src={background} alt="" />
      </div>
    </SubFooterView> 
  )
}

export default SubFooter;

export const SubFooterView = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;

  .left {
    width: 50%;
    margin: 0 6rem;
    display: flex; 
    flex-direction: column;
    gap: 1.5rem;

    .title {
      font-size: 33px;
      font-weight: 600;
    }

    .points {
      display: flex; 
      flex-direction: column;
      gap: 0.75rem;
      padding: 0 1rem;

      .point {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${({theme}) => theme.colors.text2};

        img {
          width: 20px;
        }

        p {
          font-size: 18px;
        }
      }
    }
    .btn-flex {
      display: flex;
      gap: 1rem;

      button {
        padding: 1rem 1.5rem;
        border-radius: 100px;
        border: 1px solid ${({theme}) => theme.colors.border1};
        background-color: ${({theme}) => theme.colors.white};
      }

      .signup {
        border: none;
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.blue};
      }
    }
  }

  .right {
    width: 970px;
    height: 500px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;