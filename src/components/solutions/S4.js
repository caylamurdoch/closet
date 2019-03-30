import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import Decision from '../Decision';

class S4 extends Component {
    constructor(props) {
        super(props);
        this.state = {};    
    }

    onPress = (decisionLeft) => {
        this.props.setPress(true, 's4');
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.question}>Wash it, then donate it!</Text>
                <Decision decisionType={'restart'} onPress={this.onPress} />
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

export default S4;