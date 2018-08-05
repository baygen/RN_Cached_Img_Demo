import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { BottomPart, UserName, LargeImage } from './components';


export default class ImagePost extends PureComponent {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    identifier: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
  }

  render() {

    return (
      <View style={{
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}>
        <UserName name={this.props.userName}
          styles={{
            container: {
              justifyContent: 'center'
            }
          }} />
        <LargeImage
          url={this.props.imageURL} />

        <BottomPart
          likesCount={this.props.likesCount}
          commentsCount={this.props.commentsCount}
        />
      </View>
    );
  }
}
