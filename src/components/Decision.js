import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';

class Decision extends Component {
    constructor(props) {
        super(props);
        this.state = {};    
    }

    onLeftPress = () => {
        this.props.onPress(true);
    }

    onRightPress = () => {
        this.props.onPress(false);
    }

    render() {
        if (this.props.decisionType === 'standard') {
            return (
                <View style={styles.container}>
                    <View style={styles.button}>
                        <Button
                            onPress={this.onLeftPress}
                            title="Yes"
                            color="#FF4F58"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={this.onRightPress}
                            title="No"
                            color="#FF4F58"
                        />
                    </View>
                </View>
            );
        }
        else if (this.props.decisionType === 'other') {
            return (
                <View style={styles.container}>
                    <View style={styles.button}>
                        <Button
                            onPress={this.onLeftPress}
                            title="Great!"
                            color="#FF4F58"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={this.onRightPress}
                            title="Meh"
                            color="#FF4F58"
                        />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        padding: 20
    }
});

export default Decision;