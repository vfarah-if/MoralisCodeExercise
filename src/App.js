import React, { useState, useEffect } from 'react';
import config from './config';
import './App.css';
import moralis from 'moralis';
import Header from './components/Header';
const { APIURL, ApplicationId } = config;
moralis.initialize(ApplicationId);
moralis.serverURL = APIURL;
const initialUser = moralis.User.current();

function App() {
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    // TODO: Update error handling later
    if (error) console.error(error);
  }, [error]);
  const onLogin = async () => {
    try {
      const user = await moralis.authenticate();
      setUser(user);
    } catch (err) {
      setError(err);
    }
  };
  const onLogout = () => {
    try {
      moralis.User.logOut();
    } catch (err) {
      setError(err);
    } finally {
      setUser(null);
    }
  };
  const onCreateAccount = () => {
    window.location.href = 'https://admin.moralis.io/';
  };
  return (
    <div className='App'>
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      >
        <a
          className='App-link'
          href='https://docs.moralis.io/moralis-server/getting-started/quick-start'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Moralis Web API 3 Quickly using{' '}
          <strong>{ApplicationId || 'NOTE: .env file not configured'}</strong>
        </a>
      </Header>
      <pre className='preformatted'>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default App;
