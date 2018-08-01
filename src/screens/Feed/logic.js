import { addPosts, applyFilter } from './../../redux/actions/feed';
import { getData } from './../../modules/dataReader';

export const getPosts = () => async dispatch => {

  await dispatch(addPosts((await getData())));
  await dispatch(applyFilter());
};

