import React,{Component}from 'react';
import setclass from 'classnames';
import './index.css'
export default  class TabBar extends Component{

    render(){
          const { pathname }=this.props.location
          const itemCls=name=>setclass({
              'tab-item':true,
              'item-active': pathname===name,
          })

           const linkUrl=(path)=>{
               if(path===pathname) return;
               this.props.history.push(path);
           }
            return (
                <div className='tab-root'>
         <div className={itemCls('/notelist')} onClick={()=>linkUrl('/notelist')}> 
<i className='iconfont icon-shouye'></i>
<p>首页</p>
</div>
<div className={itemCls('/my')}  onClick={()=>linkUrl('/my')}>
<i className='iconfont icon-tubiao-'></i>
<p>我的</p>
</div>
                </div>
            )
        }
    }
