// @flow
import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

import styles from "./styles/testComponent.style.js";

import { Button, Card } from 'react-native-material-design';

class TestComponent extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    This is testcomponent.
                </Text>
                <Button text="Next page =>" raised={true} onPress={() => this.props.navigation.dispatch({ type: 'goToAlt' })} />
            </View>
        );
    }
};

export default TestComponent;
