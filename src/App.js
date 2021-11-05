import './App.css';
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route exact path="/profile"
                       render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                <Route path="/dialogs"
                       render={ () => <Dialogs dialogPage={props.state.dialogPage} dispatch={props.dispatch} />}/>
            </div>
        </div>
    )
}

export default App;
