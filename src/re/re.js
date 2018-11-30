import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App';
import axios from 'axios';
import { Button,InputGroup,FormControl,Alert} from 'react-bootstrap';
class Re extends Component {
    constructor(props) {
        super(props);
        this.vauleChange = this.vauleChange.bind(this);
        this.openRegistered=this.openRegistered.bind(this);
        this.state = {
          username:'',
          password:'',
          isshow:false,
          messges:'',
          realname:''
        }
       
    }
  openRegistered(e){
    if(!this.state.username.length){
      this.setState({isshow:true,messges:'请输入用户名'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
    }
    if(!this.state.password.length){
      this.setState({isshow:true,messges:'请输入密码'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
    }
    if(!this.state.realname.length){
      this.setState({isshow:true,messges:'请输入真实姓名'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
    }
    axios.post('http://noteapi.czyyy.top/adduser',{
        username:this.state.username,
        password:this.state.password,
        realname:this.state.realname,
      })
      .then(rec=>{
        console.log(rec.data);
        if(rec.data.code===200){
            this.props.history.goBack();
        }else if (rec.data.code===401){
          this.setState({isshow:true,messges:rec.data.data});
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
        <p className="pname">注册</p>
        <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">用户名</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" placeholder="请输入用户名" name="username"  value={this.state.username} onChange={this.vauleChange}  aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
        <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">密码</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" placeholder="请输入密码" name="password" value={this.state.password} type="password" onChange={this.vauleChange}   aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
      
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">用户名</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" placeholder="请输入真实姓名" name="realname"  value={this.state.realname} onChange={this.vauleChange}  aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
      
       
        <Button  size="sm" block onClick={this.openRegistered}>注册</Button>
      </div>
        </header>
      </div>
    );
  }
}

export default Re;
