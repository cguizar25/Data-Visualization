import styled from 'styled-components';
import {AppContext} from './AppProvider'

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-column: 180px auto 100px 100px;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03
  `}
`

const toPowerCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}){
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
          {toPowerCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

const AppBar = () => {
  return <Bar>
      <Logo>CryptoDash</Logo>
      <div/>
      <ControlButton name='Dashboard'/>
      <ControlButton name='Settings'/>
    </Bar>
}

export default AppBar
