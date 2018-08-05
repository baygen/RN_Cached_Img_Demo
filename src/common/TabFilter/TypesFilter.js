import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import propTypes from 'prop-types';

import Styles from '../Styles';
import { filters } from '../../AppConstants';
import { setAndApplyFilter } from './logic';

@connect(state => ({
  filter: state.filter
}), {
  setAndApplyFilter
})
export default class TypesFilter extends Component {
  static propTypes = {
    onChange: propTypes.func,
    containerStyle: propTypes.shape({}),
    tabsProps: propTypes.shape({})
  }

  static defaultProps = {
    onChange: ()=>{},
    containerStyle: {},
    tabsProps: {}
  }

  state = {
    selectedIndex: 0
  }

  labels = filters.typeFilter.labels

  componentWillReceiveProps(nProps) {
    const type = nProps.filter.value;
    this._setSelectedIndex(filters.typeFilter.values.findIndex(e => e === type));
  }

  _onFilterChange = (index) => {
    const value = filters.typeFilter.values[index];
    const label = this.labels[index];
    this.props.setAndApplyFilter(value, this._show);
    this.props.onChange && this.props.onChange({ value, label, index });
  }

  _show = (l, filter) => {
    ToastAndroid.show(`Filter : ${filter},,, ${l}`, 800);
  }

  _setSelectedIndex = selectedIndex => this.setState({ selectedIndex })

  render() {
    return (
      <View style={[Styles.centeredContainerRow, this.props.style]}>
        <SegmentedControlTab
          {...this.props.tabsProps}
          values={this.labels}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this._onFilterChange}
        />
      </View>
    );
  }
}
