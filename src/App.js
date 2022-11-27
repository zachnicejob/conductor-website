import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import 'bulma/css/bulma.min.css';

function App() {
  return (
        <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route>
            <NotFound />
          </Route>
        </Routes>
        <Footer />
        </Router>
  );
}

export default App;