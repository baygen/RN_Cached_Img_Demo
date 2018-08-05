import React, { Component } from 'react';
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
    this.props.navigation.navigate('Feed');
  }


  render() {
    return (<LoadingView onPress={() => this._goApp()} />);
  }
}
