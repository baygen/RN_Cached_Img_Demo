import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import LoadingView from '../../common/LoadingScreen';

export default class LoadingScreen extends Component {

  _goApp = () => {
    ToastAndroid.show(JSON.stringify(this.props.navigation), 3000)
    this.props.navigation.navigate('Feed');
  }

  render() {
    return (<LoadingView onPress={()=>this._goApp()} />);
  }
}
