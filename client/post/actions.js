import { createAction } from 'redux-actions';

/*
- FAKE DATA FOR NOW
*/
const posts = [
  { id: '1', user: { id: '1', username: 'liquidfired' }, title: 'Introduction to GraphQL', votes: 2 },
  { id: '2', user: { id: '2', username: 'frostedsolid' }, title: 'Welcome to Meteor', votes: 3 },
  { id: '3', user: { id: '2', username: 'frostedsolid' }, title: 'Advanced GraphQL', votes: 1 },
  { id: '4', user: { id: '2', username: 'frostedsolid' }, title: 'Launchpad is Cool', votes: 7 },
];

// Actions we dispatch in our Action Creators
export const readPostByIdSucceeded = createAction('READ_POST_BY_ID_SUCCEEDED');
export const readPostsSucceeded = createAction('READ_POSTS_SUCCEEDED');

// Action Creators
export const readPostById = (postId) => {
  return async (dispatch) => {
    const post = await posts.find((p) => p.id === postId);
    dispatch(readPostByIdSucceeded({ post }));
  };
};

export const readPosts = () => {
  return async (dispatch) => {
    dispatch(readPostsSucceeded({ postList: posts }));
  };
};
