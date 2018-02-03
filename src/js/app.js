import React from "react";
import ReactDOM from "react-dom";


import {configureStore, history} from './redux/store';
import {Provider} from "react-redux";

import injectTapEventPlugin from 'react-tap-event-plugin';

import ShellPage from './shell.page'
//require("../../assets/css/app.css");

injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(<Provider store={store}>
  <ShellPage history={history}/>
</Provider>, document.querySelector("#app"));
