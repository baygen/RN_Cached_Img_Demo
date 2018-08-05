import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacityComponent } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import s from './style';

@connect(state => ({
  user: state.user
}))
export default class Login extends Component {

  componentDidMount() {
    const { navigation: { state: { routeName } } } = this.props;
    console.log('ProfilePage did mount for ' + routeName);
    // console.keys(this)
  }

  accept = () => {
    console.log('ACCEPTED');
    // this.props.navigation.navigate(SCREENS.AppRoot);
    // this.props.navigation.navigate('JoinPodQRScan');
  }

  decline = () => {
    console.log('DECLINED');
    // this.props.navigation.navigate('AppLoadingPage');
  }

  _onFbPress = () => {

  }

  render() {
    const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>

        <TouchableOpacityComponent onPress={this._onFbPress} >
          <Text> Login with Facebook</Text>
        </TouchableOpacityComponent>
        <Text style={s.routeName} >
          {routeName}
        </Text>
        {/* <Text>{Lang.word.Name}</Text> */}
        <TextInput style={Styles.input} />
        {/* <Text>{Lang.word.SecondName}</Text> */}
        <TextInput style={Styles.input} />
        {/* <Text>{Lang.word.Age}</Text> */}
        <TextInput style={Styles.input} />
        {/* <Text>{Lang.word.Nationality}</Text> */}
        <TextInput style={Styles.input} />
      </View>
    );
  }
}
