import WelcomeMessage from './WelcomeMessage';
import ConfineButton from './ConfineButton';
import Page from '../Shared/Page';

export default function(){
  return <Page name="settings">
    <WelcomeMessage />
    <ConfirmButton />
  </Page>
}
