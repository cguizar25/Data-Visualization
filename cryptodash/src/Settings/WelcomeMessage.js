import { AppContext } from '../AppProvider';

export default function ({firstVisit}) {
  return (
    <AppContext.Provider>
      {({firstVisit}) =>
      firstVisit ? <div>
        Welcome to CryptoDash, please seleect your favorite coins. {' '}
      </div> : null
    }
    </AppContext.Provider>
  )
}

const WelcomeMessage = (props) => {
  return <h1>Welcome to cryptodash</h1>
};

export default WelcomeMessage
