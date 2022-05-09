import WelcomeMessage from './WelcomeMessage';
import ConfineButton from './ConfineButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default function(){
  return <Page name="settings">
    <WelcomeMessage />
    <ConfirmButton />
    <CoinGrid />
  </Page>
}
