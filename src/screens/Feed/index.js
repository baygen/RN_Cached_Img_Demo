import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import { getPosts } from './logic';

@connect(state => ({
  posts: state.feed.displayedPosts,
  // store: state
}),
{
  getPosts
})
export default class Feed extends Component {
  state = {

  }

  componentDidMount() {
    console.log('DataProtection did mount');
    this.props.getPosts();
    console.log(Object.keys(this.context));
  }

  go = route => this.props.navigation.navigate(route);

  render() {
    return (
      <View style={Styles.centeredContainerColumn} >
        <TouchableOpacity
          onPress={()=>this.go('AppLoading')}
          style={{flex:1,justifyContent:'center'}}
        >
          <Text>DataProtection page:</Text>
          <Text>{this.props.posts.length}</Text>
        </TouchableOpacity>
      <View style={{flex:5, backgroundColor: '#7BA3E7',width:'100%'}}>

      </View>
      </View>
    );
  }
}
