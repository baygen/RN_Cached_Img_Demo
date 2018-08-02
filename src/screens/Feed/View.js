import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import TypesFilter from '../../common/TabFilter/TypesFilter';
import PostsFeed from '../../common/PostsFeed/View';
import { getPosts } from './logic';

@connect(state => ({
  // posts: state.feed.displayedPosts,
  // store: state
}),
  {
    getPosts
  })
export default class Feed extends Component {
  constructor(props) {
    super(props);
    state = {

    }
    // this.props.getPosts();
  }

  componentDidMount() {
    console.log('DataProtection did mount');
    this.props.getPosts();
    console.log(Object.keys(this.context));
  }

  goApploading = () => this.props.navigation.navigate('AppLoading');

  render() {
    return (
      <View style={Styles.centeredContainerColumn} >
        <TypesFilter style={{ flex: 1 }} />
        <TouchableOpacity
          onPress={this.goApploading}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <Text>P O S T S</Text>
          {/* <Text>{this.props.posts.length}</Text> */}
        </TouchableOpacity>

        {/* <View style={{ flex: 6, backgroundColor: '#7BA3E7', width: '100%' }}> */}
        <PostsFeed style={{ flex: 8 }} />
        {/* </View> */}
      </View>
    );
  }
}
