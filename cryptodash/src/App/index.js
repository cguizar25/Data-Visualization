import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled from 'styled-components';
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import {AppProvider} from './AppProvider'

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: palevioletred;
    `}
`
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <div className="App">
          <WelcomeMessage/>
          <MyButton primary> Check </MyButton>
          <TomatoButton>Check check</TomatoButton>
        </div>
      </AppProvider>
    </AppLayout>2
  );
}

export default App;
