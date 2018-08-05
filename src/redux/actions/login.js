import { LOGIN } from '../constants';

export const onInputChange = ({ name, value }) => ({
  type: LOGIN.ON_FIELD_CHANGE,
  name, value
});
