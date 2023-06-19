import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home, Profile } from './Pages';
import {  Container } from './components/index';
import { Footer, Header} from './sections/index';

function App() {
  return (
    <>
    <Router>
      <Header text="new header" color="red"/>
      <Container>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
    </>
  );
}

export default App;
