import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled from 'styled-components';
import AppLayout from './AppLayout'

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
      <div className="App">
        <WelcomeMessage/>
        <MyButton primary> Check </MyButton>
        <TomatoButton>Check check</TomatoButton>
      </div>
    </AppLayout>
  );
}

export default App;
