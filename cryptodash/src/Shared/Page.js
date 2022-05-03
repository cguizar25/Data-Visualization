import { AppContext } from '../App/AppProvider';

export default function ({name, children}) {
  return <App.Context.Consumer>
    {({page}) => {
      if (page !== name) {
        return null;
      }
      return <div> { children } </div>
    }}
  </App.Context.Consumer>
}
