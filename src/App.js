import React, { useState } from 'react';
import config from './config';
import './App.css';
import moralis from 'moralis';
const { APIURL, ApplicationId } = config;
moralis.initialize(ApplicationId);
moralis.serverURL = APIURL;
const initialUser = moralis.User.current();

function App() {
  const [user, setUser] = useState(initialUser);
  const onLogin = async () => {
    try {
      const user = await moralis.authenticate();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  const onLogout = () => {
    moralis.User.logOut();
    setUser(null);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://docs.moralis.io/moralis-server/getting-started/quick-start'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Moralis Web API 3 Quickly using{' '}
          <strong>{ApplicationId || 'NOTE: .env file not configured'}</strong>
        </a>
        {user ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <button onClick={onLogin}>Login</button>
        )}
      </header>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}

export default App;
