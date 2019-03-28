import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import Decision from './Decision';

class FlowChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPressLeft: false,
            question1: 'Have you worn it in the last six months?',
            solution1: 'Hang it up!',
            question2: 'Put it on. Does it fit?',
        };    
    }

    onPress = (decisionLeft) => {
        if (decisionLeft) {
            this.setState({lastPressLeft: true});
        }
        else {
            this.setState({lastPressLeft: false});
        }
    }

    render() {
        if (!this.state.lastPressLeft) {
            return (
                <View style={styles.container} >
                    <Text style={styles.question}>{this.state.question1}</Text>
                    <Decision decisionType={'standard'} onPress={this.onPress} />
                </View>
            );
        }
        else {
            return (
                <View>
                    <Text style={{fontSize: 22}}>Keep it!</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
        padding: 50
    },
    question: {
        fontSize: 22,
        textAlign: 'center',
    }
});

export default FlowChart;
