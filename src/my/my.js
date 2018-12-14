import React, {Component} from 'react'
import TabBar from '../tab-bar/index'
import {

    Link
  } from 'react-router-dom';
export default class My extends Component{
    render(){
        return (
            <div>
                <div className="my-item">修改个人信息</div>
                <div className="my-item">
                <Link to="/noteechart">查看添加图表
                </Link>
                </div>
                <div className="my-item">退出登陆</div>
                <TabBar {...this.props}></TabBar>
            </div>
        )
    }
}