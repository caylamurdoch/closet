import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import Q1 from './questions/Q1';
import Q2 from './questions/Q2';
import Q3 from './questions/Q3';
import Q4 from './questions/Q4';
import Q5 from './questions/Q5';
import Q6 from './questions/Q6';
import Q7 from './questions/Q7';
import Q8 from './questions/Q8';
import Q9 from './questions/Q9';
import Q10 from './questions/Q10';
import Q11 from './questions/Q11';
import Q12 from './questions/Q12';
import Q13 from './questions/Q13';
import S1 from './solutions/S1';
import S2 from './solutions/S2';
import S3 from './solutions/S3';
import S4 from './solutions/S4';
import S5 from './solutions/S5';

class FlowChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curr: 'q1',
        };    
    }

    setPress = (decisionLeft, seen) => {
        if (seen === 'q1') {
            if (decisionLeft) {
                this.setState({ curr: 's1' });
            }
            else {
                this.setState({ curr: 'q2' });
            }
        }
        else if (seen === 'q2') {
            if (decisionLeft) {
                this.setState({ curr: 'q3' });
            }
            else {
                this.setState({ curr: 'q4' });
            }
        }
        else if (seen === 'q3') {
            if (decisionLeft) {
                this.setState({ curr: 's1' });
            }
            else {
                this.setState({ curr: 'q5' });
            }
        }
        else if (seen === 'q4') {
            if (decisionLeft) {
                this.setState({ curr: 'q6' });
            }
            else {
                this.setState({ curr: 'q7' });
            }
        }
        else if (seen === 'q5') {
            if (decisionLeft) {
                this.setState({ curr: 's2' });
            }
            else {
                this.setState({ curr: 'q8' });
            }
        }
        else if (seen === 'q6') {
            if (decisionLeft) {
                this.setState({ curr: 's1' });
            }
            else {
                this.setState({ curr: 'q9' });
            }
        }
        else if (seen === 'q7') {
            if (decisionLeft) {
                this.setState({ curr: 'q10' });
            }
            else {
                this.setState({ curr: 'q8' });
            }
        }
        else if (seen === 'q8') {
            if (decisionLeft) {
                this.setState({ curr: 's3' });
            }
            else {
                this.setState({ curr: 'q11' });
            }
        }
        else if (seen === 'q9') {
            if (decisionLeft) {
                this.setState({ curr: 'q12' });
            }
            else {
                this.setState({ curr: 'q7' });
            }
        }
        else if (seen === 'q10') {
            if (decisionLeft) {
                this.setState({ curr: 'q13' });
            }
            else {
                this.setState({ curr: 's3' });
            }
        }
        else if (seen === 'q11') {
            if (decisionLeft) {
                this.setState({ curr: 's4' });
            }
            else {
                this.setState({ curr: 's5' });
            }
        }
        else if (seen === 'q12') {
            if (decisionLeft) {
                this.setState({ curr: 's1' });
            }
            else {
                this.setState({ curr: 'q7' });
            }
        }
        else if (seen === 'q13') {
            if (decisionLeft) {
                this.setState({ curr: 's1' });
            }
            else {
                this.setState({ curr: 's3' });
            }
        }
        else if (seen === 's1' || seen === 's2' || seen === 's3' ||
            seen === 's4' || seen === 's5') {
            this.setState({ curr: 'q1' });
        }
    }

    render() {

        switch(this.state.curr) {
            case 'q1':
                return <Q1 setPress={this.setPress} />

            case 'q2':
                return <Q2 setPress={this.setPress} />

            case 'q3':
                return <Q3 setPress={this.setPress} />

            case 'q4':
                return <Q4 setPress={this.setPress} />

            case 'q5':
                return <Q5 setPress={this.setPress} />

            case 'q6':
                return <Q6 setPress={this.setPress} />

            case 'q7':
                return <Q7 setPress={this.setPress} />

            case 'q8':
                return <Q8 setPress={this.setPress} />

            case 'q9':
                return <Q9 setPress={this.setPress} />

            case 'q10':
                return <Q10 setPress={this.setPress} />

            case 'q11':
                return <Q11 setPress={this.setPress} />

            case 'q12':
                return <Q12 setPress={this.setPress} />

            case 'q13':
                return <Q13 setPress={this.setPress} />

            case 's1':
                return <S1 setPress={this.setPress} />

            case 's2':
                return <S2 setPress={this.setPress} />

            case 's3':
                return <S3 setPress={this.setPress} />

            case 's4':
                return <S4 setPress={this.setPress} />
                
            case 's5':
                return <S5 setPress={this.setPress} />

            default:
                return <Q1 setPress={this.setPress} />
        }
    }
}

export default FlowChart;
