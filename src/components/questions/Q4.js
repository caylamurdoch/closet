import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import Decision from '../Decision';

class Q4 extends Component {
    constructor(props) {
        super(props);
        this.state = {};    
    }

    onPress = (decisionLeft) => {
        if (decisionLeft) {
            this.props.setPress(true, 'q4');
        }
        else {
            this.props.setPress(false, 'q4');
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.question}>Are you keeping it for sentimental reasons?</Text>
                <Decision decisionType={'standard'} onPress={this.onPress} />
            </View>
        );
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

export default Q4;