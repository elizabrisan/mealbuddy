import React from "react";
import ReactDOM from "react-dom";


import {configureStore, history} from './redux/store';
import {Provider} from "react-redux";

import injectTapEventPlugin from 'react-tap-event-plugin';

import ShellPage from './shell.page'
import 'font-awesome/scss/font-awesome.scss';  
require("../../assets/scss/app.scss");


injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(<Provider store={store}>
  <ShellPage history={history}/>
</Provider>, document.querySelector("#app"));
