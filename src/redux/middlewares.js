import { applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { navigationMiddleware } from '../navigator';

const crashReporter =store => next => async action => {
  try {
    await next(action);
  } catch (err) {
    console.log(err)
    next(action);
  }
};

export default compose(
  applyMiddleware(
    navigationMiddleware,
    promiseMiddleware(),
    thunk,
    crashReporter
  )
);
