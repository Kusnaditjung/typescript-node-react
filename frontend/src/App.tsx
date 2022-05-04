import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'


import Contact from './components/Contact';
import Login from './components/Login';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { persistor, store} from './state/store'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>  
          <Route path='/'  element={<Navigate to="/index"/>} />
          <Route path='/index'  element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/book' element={<BookList/>} />
          <Route path='/book/create' element={<BookCreate/>} />
        </Routes>
      </PersistGate>
    </Provider>      
  );
}

export default App;
