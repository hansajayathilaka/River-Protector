import React, { Component } from 'react';
import firebase from "./firebase";
import './App.css';
import logo from './logo.jpeg';
import sclLogo from './scl_logo.jpeg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TDSVal: 0,
            FlowSpeed: 0,
            WaterLevel: 0,
            login: false,
        };
    }

    componentDidMount() {
        const getValueTDS = firebase.database().ref("TDSVal");
        getValueTDS.on("value", doc => {
            let value = doc.val();
            // Whenever the value changes on the server, it is also reset on the running app through the variable
            this.setState({ ...this.state, TDSVal: value});
        });

        const getValueFlowSpeed = firebase.database().ref("FlowSpeed");
        getValueFlowSpeed.on("value", doc => {
            let value = doc.val();
            // Whenever the value changes on the server, it is also reset on the running app through the variable
            this.setState({ ...this.state, FlowSpeed: value});
        });

        const getValueWaterLevel = firebase.database().ref("WaterLevel");
        getValueWaterLevel.on("value", doc => {
            let value = doc.val();
            // Whenever the value changes on the server, it is also reset on the running app through the variable
            this.setState({ ...this.state, WaterLevel: value});
        });

    }

    render() {
        const labelStyle3={
            color:'red',
            marginTop:"60px",
            fontSize:'70px',

        };
        const labelStyle2={
            color:'white',
            marginTop:"60px",
            fontSize:'50px',
        };
        const labelStyle={
            color:'red',
            marginTop:"60px",
            fontSize:'50px',

        };

        const home = <div className="container">
            <h1 style={{ textAlign: "center",marginTop:"50px"}}>River Protecter </h1>
            <div className="row" id="tds">
                <label className="col-md-6"style={labelStyle2}>TDS Reading</label>
                <span className="col-md-3"style={labelStyle}>{this.state.TDSVal}</span>
            </div>
            <div className="row" id="flow-speed">
                <label className="col-md-6"style={labelStyle2}>Water Flow Speed Reading</label>
                <span className="col-md-3"style={labelStyle3}>{this.state.FlowSpeed}</span>
            </div>
            <div className="row" id="water-level">
                <label className="col-md-6"style={labelStyle2}>Water Level Reading</label>
                <span className="col-md-3"style={labelStyle}>{this.state.WaterLevel}</span>
            </div>
        </div>;

        const login = <div className="login-box">
            <form>
                <h1>Login</h1>
                <div className="textbox">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <button type="button" className="btn" onClick={(evt) => {
                    this.setState({ ...this.state, login: !this.state.login });
                }
                }>Sign in</button>
            </form>
        </div>;

        const data = () => {
            if (this.state.login)
                return home;
            else
                return login;
        };
        return (
            <div>
                <img src={sclLogo} id='sclLogo' alt="CCK Logo"/>
                <img src={logo} id='logo' alt="Group Logo"/>
                { data() }
            </div>
        );
    }
}

export default App;
