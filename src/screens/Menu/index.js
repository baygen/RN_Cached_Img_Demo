import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import TypesFilter from '../../common/TabFilter/TypesFilter';

@connect(state => ({
  filter: state.filter.value
}))
export default class Menu extends Component {
  state = {

  }

  go = route => {
    this.props.navigation.navigate(route);
  }

  onFilterChange = (text) => {
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text >Select filter to apply </Text>
        <Text >{this.props.filter || ' .'}</Text>

        <TypesFilter

          tabsProps={{
            tabsContainerStyle: {
              flexDirection: 'column',
              flex:1,
              width: '100%'
            }
          }}
          onChange={this.onFilterChange}
        />
      </View>
    );
  }
}
