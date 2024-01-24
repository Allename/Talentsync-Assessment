import styled from "styled-components"
import logo from '../assets/icons/logo.png'
import clearLink from '../assets/icons/clearLink.png'

const Logo = () => {
  return (
    <LogoView>
      <div>
        <img src={logo} alt="ClearLink Logo" />
        <div className="img">
          <img className='image' src={clearLink} alt="Clearlink" />
        </div>
      </div>
    </LogoView>
  )
}

export default Logo

const LogoView = styled.div`
  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .img {
      width: 6rem;
      height: 1.05rem;
    }

    img {
     width: 1.2rem;
     height: 1.2rem;
    }

    .image {
      width: 100%;
      height: 100%;
    }

  }
`;