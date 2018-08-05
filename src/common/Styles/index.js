import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import COLORS from './colors';

export const phoneSize = {
  height: HEIGHT,
  width: WIDTH
};

export default StyleSheet.create({
  centeredFlexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  messagePostContainer: {
    flex: 1,
    width: WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 10
  },
  imagePostContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  postImage: {
    width: WIDTH,
    height: WIDTH,
  },
  bottomRow: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10, height: 35
  },
  avatarIcon: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  centeredContainerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredContainerColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullHeightWidth: {
    height: '100%',
    width: '100%'
  },
  backgroundColorGray: {
    backgroundColor: 'gray'
  },
  rowWidthContainer: {
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',// 'space-between'
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  input: {
    width: 0.9 * WIDTH,
    lineHeight: 16,
    fontSize: 14
  }
});
