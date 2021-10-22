import './App.css';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' component={CharacterList} />
          <Route path='/:id' component={CharacterDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
