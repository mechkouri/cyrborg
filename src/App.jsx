import './App.css';
import {  Container } from './components/index';
import { Footer, GamingLibrary, Header, Hero , MostPopular} from './sections/index';

function App() {
  return (
    <>
    <Header text="new header" color="red"/>
    <Container>
      <Hero />
      <MostPopular />
      <GamingLibrary />
    </Container>
    <Footer />
    </>
  );
}

export default App;
