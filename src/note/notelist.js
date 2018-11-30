import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import  Cookies from 'js-cookie';
class Notelist extends Component {
    constructor(props) {
        super(props);
        this.vauleChange = this.vauleChange.bind(this);
        this.openRegistered=this.openRegistered.bind(this);
        this.state = {
          notelist:[],

        }
       
    }
    componentDidMount() {
     axios.post('http://noteapi.czyyy.top/getUserNote',{
         userid:Cookies.get('userid'),
     })
     .then(rec=>{
         console.log(rec.data);
         if(rec.data.code===200){
             this.setState({ notelist:rec.data.data} );
         }
     })
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
     // console.log(this.state.notelist);
    //   const noteall=this.state.notelist.map((v)=>{
    //     <li>
    //     <p>{v.title}</p>
    //     <div>{v.text}</div>
    // </li>
    
    //   })
    return (
      <div >
          
        {/* <Alert  variant="danger" onClose={this.openda} show={this.state.isshow}>
   {this.state.messges}
  </Alert> */}
       
   <div className="notelist">
   <ul>
    {this.state.notelist.map((v,i)=>
         <li key={i}>
         <Link to={`/updatanote/${v.id}`} >
              <p>{v.title}</p>
              <div>{v.text}</div>
              </Link>
         </li>
  
    )}
   </ul>
<Link  to="/addnote"> <div className="addnote"><i className="iconfont icon-jia"></i></div></Link>
   </div>
 
      </div>
    );
  }
}

export default Notelist;