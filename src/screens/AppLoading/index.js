import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import LoadingView from '../../common/LoadingScreen';
import { checkUserAuthorization } from './logic';

@connect(
  s => ({}),
  { checkUserAuthorization }
)
export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.props.checkUserAuthorization();
  }

  _goApp = () => {
    ToastAndroid.show(JSON.stringify(this.props.navigation), 3000);
    this.props.navigation.navigate('Feed');
  }

  // _goAuth = () => {
  //   this.props.navigation.navigate('Feed');
  // }

  render() {
    return (<LoadingView onPress={() => this._goApp()} />);
  }
}
