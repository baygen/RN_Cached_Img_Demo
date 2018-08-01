import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Styles from '../Styles';
import { filters } from '../../AppConstants';
import { setAndApplyFilter } from './logic';

@connect(state => ({
  filter: state.filter
}), {
    setAndApplyFilter
  })
export default class TypesFilter extends Component {
  state = {
    selectedIndex: 0
  }

  labels = filters.typeFilter.labels

  _onFilterChange = (index) => {
    this.props.setAndApplyFilter(filters.typeFilter.values[index], this._show)
  }

  _show = (l,filter) => {
    ToastAndroid.show(`Filter : ${filter},,, ${l}`, 800)

  }

  componentWillReceiveProps(nProps) {
    const type = nProps.filter.value;
    this._setSelectedIndex(filters.typeFilter.values.findIndex(e => e === type))
  }

  _setSelectedIndex = selectedIndex => this.setState({ selectedIndex })

  render() {
    return (
      <View style={[Styles.centeredContainerRow, this.props.style]}>
        <SegmentedControlTab
          values={this.labels}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this._onFilterChange}
        />
      </View>
    );
  }
}
