import React, { Component } from 'react';
import '../App';
import axios from 'axios';
import { Button,Alert} from 'react-bootstrap';
import {Http} from '../config'
import  Cookies from 'js-cookie';
import { Toast } from 'antd-mobile';
class Notelist extends Component {
    constructor(props) {
        super(props);
        this.vauleChange = this.vauleChange.bind(this);
        this.openUpdata=this.openUpdata.bind(this);
        this.state = {
        uid:Cookies.get('userid'),
          title:'',
          text:'',
          isshow:false,
          messges:'',
          noteid:this.props.match.params.id,
        }
       
    }
    openda(){

    }
    componentDidMount() {
      Http.post(`/getNote`,{
            noteid:this.props.match.params.id
        })
        .then(rec=>{
          
           this.setState({title:rec.data.data.title,text:rec.data.data.text});
        })
         }
         openUpdata(e){
    if(!this.state.title.length){
      this.setState({isshow:true,messges:'请输入标题'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
      return;
    }
    if(!this.state.text.length){
      this.setState({isshow:true,messges:'请输入正文'});
      setTimeout(()=>{
        this.setState({isshow:false});
      },2000);
      return;
    }
    Http.post(`/updataNote`,{
        uid:this.state.uid,
        noteid:this.state.noteid,
        title:this.state.title,
        text:this.state.text,
      })
      .then(rec=>{
        console.log(rec.data);
        if(rec.data.code===200){
         Toast.info('更新成功', 2);
            this.props.history.goBack();
        }else if (rec.data.code===401){
          Toast.info(rec.data.data, 2);
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
      <div >
          
        <Alert  variant="danger" onClose={this.openda} show={this.state.isshow}>
   {this.state.messges}
  </Alert>
       
 <div className="notetitle"><input placeholder="请输入标题" name="title" value={this.state.title} onChange={this.vauleChange}></input></div>
 <div className="notetext"><textarea placeholder="请输入正文" name="text" value={this.state.text}  onChange={this.vauleChange}></textarea></div>
 
 <div className="btnsave"> <Button  size="sm" block onClick={this.openUpdata}>更新</Button></div>
      </div>
    );
  }
}

export default Notelist;