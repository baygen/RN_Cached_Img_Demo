import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Styles from '../../common/Styles';

@connect(state => ({}))
export default class Settings extends Component {
  static propTypes = {

  }

  state = {

  }


  render() {
    // const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>

        <Text >This is settings screen</Text>

        <TouchableOpacity onPress={this.props.navigation.goBack} >
          <Text > return to the previous screen</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
