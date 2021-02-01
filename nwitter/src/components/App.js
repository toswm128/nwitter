import React, {useState} from 'react';
import AppRouter from './Router';
import {authService} from "../firebase"

function App() {
  console.log(authService.currentUser)
  const [isLogggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <div> <AppRouter isLogggedIn={isLogggedIn} /></div>
}

export default App;
