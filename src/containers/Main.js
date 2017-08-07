// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as testAction from "../actions/testAction";
import TestComponent from "../components/testComponent";
import styles from "./styles/Main.style.js";

import {
  View,
  Text,
} from 'react-native';

class Main extends React.Component {

  componentDidMount() {
    this.props.testFunction('Props says Hello!');
    console.log(this.props.testReducer.item);
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>
          This is main container. {this.props.testReducer ? this.props.testReducer.item : null}
        </Text>
        <TestComponent navigation={this.props.navigation} />
      </View>
    );
  }
};

const mapStateToProps = (state) => ({ testReducer: state.testReducer });

const mapDispatchToProps = dispatch => bindActionCreators(testAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
