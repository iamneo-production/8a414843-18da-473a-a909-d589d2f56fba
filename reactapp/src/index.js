import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppWrapper from './Appwrapper';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { store , persistor} from "./provider/configureStore"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper>
    <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}> 
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Notifications position='top-right'/>
      <App />
    </MantineProvider>
    </PersistGate>
    </Provider>
    </AppWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
