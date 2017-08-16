import { handleActions } from 'redux-actions';
import { readPostByIdSucceeded, readPostsSucceeded } from './actions';

const defaultState = {
  byId: {},
  allIds: [],
};

export default handleActions({
  [readPostByIdSucceeded]: (state, { payload }) => {
    const post = payload.post;
    return {
      ...state,
      byId: {
        ...state.byId,
        [post.id]: post,
      },
      allIds: [...state.allIds, post.id],
    };
  },

  [readPostsSucceeded]: (state, { payload }) => {
    const posts = payload.posts;
    const byId = {};
    const allIds = [];

    posts.forEach((post) => {
      byId[post.id] = post;
      allIds.push(post.id);
    });

    return {
      ...state,
      byId,
      allIds,
    };
  },
}, defaultState);
