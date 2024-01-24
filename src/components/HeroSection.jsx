import styled from "styled-components"
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <HeroView>
      <Navbar />
      <p>Hero Section</p>
    </HeroView>
  )
}

export default HeroSection;

const HeroView = styled.div`

`;