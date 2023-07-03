import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SystemSetUp from './components/SystemSetUp';
import Tasks from './components/Tasks';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import MainNavigation from './Navigation/MainNavigation';
import SearchBar from './utils/SearchBar';
import ProfileInfo from './utils/ProfileInfo';
import Button from './components/FormElements/ButtonTypes/Button';
import TextInput from './components/FormElements/TextTypes/TextInput';
const App = () => {

  return (
    <BrowserRouter>
      <div className='left' >
      <ProfileInfo />
      <SearchBar />
      <MainNavigation />
      </div>
      <div className='right'>
      <Routes>
        <Route 
          path="/" 
          exact 
          Component={ Home }
        >
        </Route>
        <Route 
          path='/systemsetup/user' 
          exact 
          Component={ SystemSetUp }
        >
        </Route>
        <Route 
          path='/systemsetup/company' 
          exact 
          Component={ SystemSetUp }
        >
        </Route>
        <Route
          path='/tasks' 
          exact 
          Component={ Tasks }
        >
        </Route>
        <Route 
          path='/reports' 
          exact 
          Component={Reports }
        >
        </Route>
        <Route 
          path='/dashboard' 
          exact 
          Component={ Dashboard }
        >
        </Route>
        <Route 
          path='/buttons' 
          exact 
          Component={ Button }
        >
        </Route>
        <Route 
          path='/textinput' 
          exact 
          Component={ TextInput }
        >
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
