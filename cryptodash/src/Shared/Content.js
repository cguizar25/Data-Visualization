import { AppContext } from '../App/AppProvider';

const Content = (props) => {
  return <AppContext.Consumer>
    {({coinList}) => {
      if(!coinList){
        return <div> Loading Coins </div>
      }
      if(!firstVisit && !prices){
        return <div> Loading Prices </div>
      }
      return <div> {props.children} </div>
    }}
  </AppContext.Consumer>
}

export default Content;
