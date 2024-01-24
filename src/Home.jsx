import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <HomeView>
      <HeroSection />
      <Footer />
    </HomeView>
  )
}

export default Home;

const HomeView = styled.div`
  margin: 0 3rem;
`;