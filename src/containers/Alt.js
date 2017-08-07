// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as testAction from "../actions/testAction";

import {
  View,
  Text,
} from 'react-native';

class Alt extends React.Component {
  render() {
    return (
      <View>
        <Text>
          This is alt container. {this.props.testReducer ? this.props.testReducer.item : null}
        </Text>
      </View>
    );
  }
};

const mapStateToProps = (state) => ({ testReducer: state.testReducer });

const mapDispatchToProps = dispatch => bindActionCreators(testAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alt);
