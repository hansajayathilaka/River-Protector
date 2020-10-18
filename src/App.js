import React, { Component } from 'react';
import firebase from "./firebase";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TDSVal: 0,
            FlowSpeed: 0,
            WaterLevel: 0,
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
        return (
            <div className="container">
                <h1 style={{ textAlign: "center" }}>River Protecter</h1>
                    <div className="row" id="tds">
                        <label className="col-md-3">TDS Reading</label>
                        <span className="col-md-3">{this.state.TDSVal}</span>
                    </div>
                    <div className="row" id="flow-speed">
                        <label className="col-md-3">Water Flow Speed Reading</label>
                        <span className="col-md-3">{this.state.FlowSpeed}</span>
                    </div>
                    <div className="row" id="water-level">
                        <label className="col-md-3">Water Level Reading</label>
                        <span className="col-md-3">{this.state.WaterLevel}</span>
                    </div>
            </div>

        );
    }
}

export default App;
