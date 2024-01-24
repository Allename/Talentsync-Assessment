import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import WhyClearlink from "./components/WhyClearlink";
import Shopify from "./components/Shopify";
import FAQs from "./components/FAQs";

const Home = () => {
  return (
    <HomeView>
      <HeroSection />
      <WhyClearlink />
      <Shopify />
      <FAQs />
      <SubFooter />
      <Footer />
    </HomeView>
  )
}

export default Home;

const HomeView = styled.div`
  /* margin: 0 3rem; */
`;