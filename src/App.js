import React, { Component } from 'react';
// import './App.css';
import { Route, Switch, Fade } from 'react-router-dom';
import {LandingPage, Navbar, Footer, AboutUs, OurWork, Services, Contact, ParallaxTest} from './components'

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        language: 'eng',
      }
    this.changeLanguage= this.changeLanguage.bind(this)
  }

  changeLanguage(){
    this.state.language==='eng' ? 
    this.setState({
      language: 'esp'
    })
    :
    this.setState({
      language: 'eng'
    })
  }
  componentDidMount(){
    console.log('MAIN COMPONENT MOUNTED')
  }
  render() {
   console.log('NEW REFRESH ON APP')
    const landingPageFunc =(props)=>{
      return(
        <LandingPage language={this.state.language}
        {...props}
        />
      )
    }

    //Renderings 
    return (
      <div className="root">
        <Navbar language={this.state.language} changeLanguage={this.changeLanguage}/>
        <Route exact path='/' render={landingPageFunc} />
        <Switch>
          <Route exact path='/parallax' render={ParallaxTest} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
