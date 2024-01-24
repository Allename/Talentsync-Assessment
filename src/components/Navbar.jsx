import styled from "styled-components";
import Logo from "./Logo";
// import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-down.icon.svg'

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <ul>
        <li><a href="#">Products</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>

      <div className='btn-flex'>
        <button>Talk to sales</button>
        <button className='signup'>Sign up for free</button>
      </div>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 0.5rem 2rem;
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.grey_100};
  border: 1px solid ${({theme}) => theme.colors.border1};

  ul {
    display: flex; 
    gap: 2rem;
    list-style: none;
    padding-left: 3rem;
    margin: 0 auto;

    li {
      

      a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.text};
      } 
    }

  }

  .btn-flex {
    display: flex;
    justify-content: space-between;
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
`;