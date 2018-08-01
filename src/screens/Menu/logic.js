import { setFilterType, applyFilter } from './../../redux/actions/feed';

export const setFilter = (type) => async dispatch => dispatch(setFilterType(type));

export const setAndApplyFilter = (type) => async dispatch => {

  await dispatch(setFilterType(type));
  await dispatch(applyFilter());
};
