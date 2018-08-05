import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MessagePost from '../Post/MessagePost';
import ImagePost from '../Post/ImagePost';
import Styles from '../Styles';

@connect(state => ({ posts: state.feed.displayedPosts }))
export default class PostsFeed extends Component {
  state = {

  }

  // renderPost = ({ item }) => {
  //   if (item.type === 'messagePost') return <MessagePost {...item} key={item.identifier} />;
  //   return (<ImagePost {...item} key={item.identifier} /> );
  // }

  // genKey = (item, index) => `${item.identifier}`

  render() {
    return (

      <View style={[Styles.fullWidth, this.props.style]}>
        <ScrollView
          removeClippedSubviews={true}>
            {this.props.posts.map(item =>{
              if (item.type === 'messagePost') return <MessagePost {...item} key={item.identifier} />;
              return (<ImagePost {...item} key={item.identifier} /> );
            })}
          </ScrollView>

        {/* <FlatList
          keyExtractor={this.genKey}
          initialNumToRender={2}
          renderToHardwareTextureAndroid={true}
          data={this.props.posts}
          renderItem={this.renderPost}
        /> */}
      </View>
    );
  }
}
