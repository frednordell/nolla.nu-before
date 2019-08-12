import React, { Component } from 'react';
import './App.css';

//MUI
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/*import TopBar from './topbar/topbar';*/
import Intro from './intro/intro';
import Multi from './multi-part/miulti';
import Info from './info/info';
import Schedule from './schedule/schedule';
import Button from '@material-ui/core/Button';

let theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f280a1'
    }
  }
}))

class App extends Component {

  constructor(props) {
    super(props);
    let navigatorLanguage = "";
    if (navigator.languages && navigator.languages.length) {
      navigatorLanguage=  navigator.languages[0];
    } else {
      navigatorLanguage = navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
    this.state = {lang: navigatorLanguage !== "sv"? "eng" : "swe"}
  }

  text =  {
    swe: "English",
    eng: "Swedish"
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/*<TopBar />*/}
        <Button id="switch" onClick={() => this.state.lang === "swe" ? this.setState({lang: "eng"}) : this.setState({lang: "swe"})}>Switch to {this.text[this.state.lang]}</Button>
        <Intro lang={this.state.lang}/>
        <Multi lang={this.state.lang}/>
        <Info lang={this.state.lang}/>
        <Schedule lang={this.state.lang}/>
      </MuiThemeProvider>
    );
    }
}

export default App;
