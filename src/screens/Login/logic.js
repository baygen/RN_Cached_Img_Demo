import { onInputChange } from '../../redux/actions/login';

export const onFieldChange = ({ name, value }) => dispatch => {
  dispatch(onInputChange({ name, value }));
};

export const requestFB = () => dispatch => {

};
