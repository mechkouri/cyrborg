import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';


import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Browse, Details, Home, Profile, Streams } from './Pages';
import {  Container } from './components';
import { Footer, Header} from './sections';


function App() {
  return (
    <>
    <Router>
      <Header text="new header" color="red"/>
      <Container>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/details' element={<Details/>} />
            <Route path='/browse' element={<Browse/>} />
            <Route path='/streams' element={<Streams />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
    </>
  );
}

export default App;
