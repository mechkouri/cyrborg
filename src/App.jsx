import './App.css';
import {  Container } from './components/index';
import { Header, Hero , MostPopular} from './sections/index';

function App() {
  return (
    <>
    <Header text="new header" color="red"/>
    <Container>
      <Hero />
      <MostPopular />
    </Container>
    
    </>
  );
}

export default App;
