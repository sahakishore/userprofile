import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';


const App = () => {



  return (
    <Router>
      <div>
      <Header />
      <main className='py-3'>
        <Container className='py-3'>

          <Route path='/user/:id' component={UserScreen} />
          
          <Route path='/' component={HomeScreen} exact />
          {/* <HomeScreen/> */}
        </Container>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
