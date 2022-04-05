import React from 'react';
import ReactDOM from 'react-dom';
import RankTable from './component/RankTable';
import './index.css';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <RankTable />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
