import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import WhyClearlink from "./components/WhyClearlink";

const Home = () => {
  return (
    <HomeView>
      <HeroSection />
      <WhyClearlink />
      <SubFooter />
      <Footer />
    </HomeView>
  )
}

export default Home;

const HomeView = styled.div`
  /* margin: 0 3rem; */
`;