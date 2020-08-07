import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { UserProvider } from './components/Firebase/UserAuthContext';
import App from './components/App';

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
