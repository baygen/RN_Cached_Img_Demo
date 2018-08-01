import { addPosts, applyFilter, setPosts } from '../../redux/actions/feed';
import { getData } from '../../modules/dataReader';

export const getPosts = () => async (dispatch, getState) => {

  await dispatch(setPosts((await getData())));

  dispatch(applyFilter((await getState()).filter.value));
};

