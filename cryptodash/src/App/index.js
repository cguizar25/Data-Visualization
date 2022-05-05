import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import {AppProvider} from './AppProvider'
import Settings from '../Settings';


function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>2
  );
}

export default App;
