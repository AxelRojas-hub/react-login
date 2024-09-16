/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { LoginForm } from './LoginForm';
import { ThankYou } from './ThankYou';

class App extends React.Component<any,any> {
  constructor(props: any){
    super(props);
    this.state={
      loggedIn: false
    }
  }
  onLogin(userData: { email: string; password: string; }){
    this.setState({
      loggedIn:true
    })
  }
  render(): React.ReactNode {
      const showForm = !this.state.loggedIn;
    return showForm ? <LoginForm onLogin={(val)=>{this.onLogin(val)}}/>: <ThankYou/>
}
}

export default App
