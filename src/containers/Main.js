import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as testAction from "../actions/testAction";

import {
  View,
  Text,
} from 'react-native';

class Main extends React.Component {

  componentDidMount() {
    this.props.testFunction('orange');
    console.log(this.props.testReducer.item);
    setTimeout(() => {
      this.props.navigation.dispatch({ type: 'goToAlt' });
    }, 1500)
  };

  render() {
    return (
      <View>
        <Text>
          This is main container {this.props.testReducer ? this.props.testReducer.item : null}
        </Text>
      </View>
    );
  }
};

const mapStateToProps = (state) => ({ testReducer: state.testReducer });

const mapDispatchToProps = dispatch => bindActionCreators(testAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
