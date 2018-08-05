import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import TypesFilter from '../../common/TabFilter/TypesFilter';
import PostsFeed from '../../common/PostsFeed/View';
import { getPosts } from './logic';

@connect(state => ({
}),
{
  getPosts
})
export default class Feed extends Component {
  constructor(props) {
    super(props);
    state = {

    };
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <View style={Styles.centeredContainerColumn} >
        <TypesFilter style={{ flex: 1 }} />
        {/* <TouchableOpacity
          onPress={this.goApploading}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <Text>P O S T S</Text>
        </TouchableOpacity> */}
        <PostsFeed style={{ flex: 9 }} />
      </View>
    );
  }
}
