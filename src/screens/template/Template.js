import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import Lang from '../../Languages';

@connect(state => ({}))
export default class TemplatePage extends Component {
  state = {

  }

  go = route => {
    this.props.navigation.navigate(route);
  }

  render() {
    // const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text >Text</Text>
      </View>
    );
  }
}
