import { applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { navigationMiddleware } from '../navigator';


export default compose(
  applyMiddleware(
    navigationMiddleware,
    promiseMiddleware(),
    thunk,
  )
);
