import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native';
import Decision from '../Decision';

class S3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};    
    }

    onPress = (decisionLeft) => {
        this.props.setPress(true, 's3');
    }

    render() {
        return (
            <View style={styles.container} >
                <Image source={require('./toss.png')} style={styles.image}/>
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
    },
    image: {
        flex: 1,
        width: 200,
        marginTop: 30,
    }
});

export default S3;