import React from 'react';
import './App.css';

//MUI
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/*import TopBar from './topbar/topbar';*/
import Intro from './intro/intro';
import Multi from './multi-part/miulti';
import Info from './info/info';
import Schedule from './schedule/schedule';

let theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f280a1'
    }
  }
}))

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {/*<TopBar />*/}
      <Intro/>
      <Multi />
      <Info />
      <Schedule />
    </MuiThemeProvider>
  );
}

export default App;
