import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';

// @connect(state => ({
//   filter: state.feed.filterType
// }), { setFilter, setAndApplyFilter })
export default class Menu extends Component {
  state = {

  }

  go = route => {
    this.props.navigation.navigate(route);
  }

  onFilterChange = (text) => {
    this.props.setAndApplyFilter(text)
    this.props.navigation.closeDrawer();
  }

  render() {
    // const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text >Select filter to apply </Text>
        <Text >{this.props.filter||' .'}</Text>
        <Picker
          selectedValue={this.props.filter}
          style={{ height: 50, width: 150}}
          onValueChange={this.onFilterChange}>
          <Picker.Item label="Photo" value="photoPost" />
          <Picker.Item label="Messages" value="messagePost" />
          <Picker.Item label="All" value="" />
        </Picker>
      </View>
    );
  }
}
