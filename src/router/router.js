import React from 'react';

import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import home from '../App'
import re from '../re/re'
import notelist from '../note/notelist'
import addnote from '../note/addnote'
import updatanote from '../note//updatanote'
import my from '../my/my'
import noteechart from '../my/note-echarts'

const getRouter = () => (
   
    <Router>
        <div>
            <Switch>
       
                <Route exact path="/" component={home}/>
                <Route path="/re" component={re}/>
                <Route path="/notelist" component={notelist} />
                <Route path="/addnote" component={addnote}  />
                <Route path="/updatanote/:id" component={updatanote}  />
                <Route path="/my" component={my} />
                <Route path="/noteechart" component={noteechart} />
            </Switch>
        </div>
    </Router>
   
);
// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//       this.isAuthenticated = true;
//       setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//       this.isAuthenticated = false;
//       setTimeout(cb, 100);
//     }
//   };
// function PrivateRoute({ component: Component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           fakeAuth.isAuthenticated ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/",
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }
export default getRouter;