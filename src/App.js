import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import re from './re/re'
import { Button,InputGroup,FormControl,Alert} from 'react-bootstrap';
import { instanceOf } from 'prop-types';
import  Cookies  from 'js-cookie';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  browserHistory,
  Link
} from 'react-router-dom';


class App extends Component {

  constructor(props) {
super(props)
this.openLogin=this.openLogin.bind(this);
this.vauleChange = this.vauleChange.bind(this);
this.state = {
          username:'',
          password:'',
          isshow:false,
          messges:''
}
  }
  openLogin() {
    if(!this.state.username){
      this.setState({isshow:true,messges:'请输入用户名'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
    }
    if(!this.state.password){
      this.setState({isshow:true,messges:'请输入密码'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
    }
 
    axios.post('http://noteapi.czyyy.top/openlogin',{
      username:this.state.username,
      password:this.state.password,
    })
    .then(rec=>{
     if(rec.data.code===200){
      Cookies.set('userid', rec.data.data.id);
      this.props.history.push('/notelist');
     }else{
      this.setState({isshow:true,messges:re.data.data});
      setTimeout(()=>{
        this.setState({isshow:false});

      },2000);
     }
     
    })
    .catch(err=>{
      console.log(err);
    })
  }
  openda(){

  }
  vauleChange(e){
    this.setState({[e.target.name]:e.target.value});
    e.preventDefault(); 
}
  render() {
    return (
      <div className="App">

        <header className="App-header">
        <Alert  variant="danger" onClose={this.openda} show={this.state.isshow}>
   {this.state.messges}
  </Alert>
          <img src={logo} className="App-logo" alt="logo" />
      <div className="admin-view">
        <p className="pname">登陆</p>
        <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">用户名</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" placeholder="请输入姓名" name="username"  value={this.state.username} onChange={this.vauleChange}  aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
        <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">密码</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" placeholder="请输入密码" name="password" value={this.state.password} type="password" onChange={this.vauleChange}   aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
        {/* <botton className="login-btn"  onClick={this.openLogin}>登录</botton>   */}
     
        <Button  onClick={this.openLogin}  size="sm" block>登录</Button>
      <Link to="/re" className="gore">马上注册</Link>  
      
       
      </div>
        </header>

      </div>
      
    );
  }
}

export default App;
