import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import Q1 from './questions/Q1';
import Q2 from './questions/Q2';
import Q3 from './questions/Q3';

class FlowChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPressLeft: false,
            curr: 'q1',
        };    
    }

    setPress = (decisionLeft, seen) => {
        if (decisionLeft) {
            this.setState({lastPressLeft: true});
        }
        else {
            this.setState({lastPressLeft: false});
        }
    }

    setSeen = (seen) => {
        if (seen === 'q1') {
            this.state.curr = 'q2';
        }
        else if (seen === 'q2') {
            this.state.curr = 'q3';
        }
        else if (seen === 'q3') {
            this.state.curr = 'q1';
        }
    }

    render() {

        switch(this.state.curr) {
            case 'q1':
                return (
                    <Q1 setPress={this.setPress} setSeen={this.setSeen}/>
                )

            case 'q2':
                return (
                    <Q2 setPress={this.setPress} setSeen={this.setSeen}/>
                )

            case 'q3':
                return (
                    <Q3 setPress={this.setPress} setSeen={this.setSeen}/>
                )

            default:
                return (
                    <Q1 setPress={this.setPress} setSeen={this.setSeen}/>
                )
        }
    }
}

export default FlowChart;
