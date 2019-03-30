import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import Decision from '../Decision';

class Q10 extends Component {
    constructor(props) {
        super(props);
        this.state = {};    
    }

    onPress = (decisionLeft) => {
        if (decisionLeft) {
            this.props.setPress(true, 'q10');
        }
        else {
            this.props.setPress(false, 'q10');
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.question}>Can you fix it right now?</Text>
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

export default Q10;