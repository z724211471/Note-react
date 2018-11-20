import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import home from '../App'
import re from '../re/re'
import notelist from '../note/notelist'
import addnote from '../note/addnote'
import updatanote from '../note//updatanote'
const getRouter = () => (
   
    <Router>
        <div>
            <Switch>
       
                <Route exact path="/" component={home}/>
                <Route path="/re" component={re}/>
                <Route path="/notelist" component={notelist} />
                <Route path="/addnote" component={addnote}  />
                <Route path="/updatanote/:id" component={updatanote}  />
            </Switch>
        </div>
    </Router>
   
);

export default getRouter;