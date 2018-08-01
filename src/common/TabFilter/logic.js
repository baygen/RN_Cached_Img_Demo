import { setDisplayedPosts } from '../../redux/actions/feed';
import { setFilterValue } from '../../redux/actions/filter';
import { filters } from '../../AppConstants';

export const setAndApplyFilter = (filterValue, cb) => async (dispatch, getState) => {
  // Check if type is exist in entity
  filterValue = filters.typeFilter.values.find(v => v === filterValue);
  const posts = (await getState()).feed.allPosts;
  // cb(posts.length, filterValue);
  const fp = filterValue ? posts.filter(p => (p.type === filterValue)) : posts;
  // posts.push('dasdasda')
  cb(fp.length, filterValue)
  dispatch(
    setFilterValue(filterValue)
  );

  dispatch(
    setDisplayedPosts(
      fp
      // posts
    )
  );
}