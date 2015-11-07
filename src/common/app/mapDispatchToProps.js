import * as redditActions from '../reddit/actions';
import * as imgurActions from '../imgur/actions';
import * as readabilityActions from '../readability/actions';
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

const actions = [
  redditActions,
  imgurActions,
  readabilityActions,
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
