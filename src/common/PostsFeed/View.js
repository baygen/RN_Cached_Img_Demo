import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import MessagePost from '../Post/MessagePost';
import Styles from '../Styles';

@connect(state => ({ posts: state.feed.displayedPosts }))
export default class PostsFeed extends Component {
  state = {

  }

  go = route => {
    this.props.navigation.navigate(route);
  }

  renderPost = ({ item }) => {
    if (item.type === 'messagePost') return <MessagePost {...item} key={item.identifier} />
    return (<View key={item.identifier} >
      <Image source={{ uri: item.imageURL, cache: 'only-if-cached', width: '100%', height: 300 }} fadeDuration={100} resizeMode='contain' />
      <Text style={{ backgroundColor: 'green', padding: 5 }} > {item.userName}</Text>
    </View>
    )
  }

  genKey = (item, index) => `${index}${item.identifier}`

  render() {
    return (
      <View style={[{ flex: 1, width: '100%' }, this.props.style]}>
        <FlatList
          initialNumToRender={5}
          // debug={true}
          extraData={this.props.posts}
          keyExtractor={this.genKey}
          data={this.props.posts}
          renderItem={this.renderPost}
        />
      </View>
    );
  }
}
