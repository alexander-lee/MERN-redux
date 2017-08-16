import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../../components/Post';
import { readPosts } from '../../actions';

export class PostList extends Component {
  static propTypes = {
    post: PropTypes.shape({
      byId: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        user: PropTypes.shape({
          username: PropTypes.string,
        }),
        votes: PropTypes.number,
      })),
      allIds: PropTypes.arrayOf(PropTypes.string),
    }),
    readPosts: PropTypes.func,
  }

  componentDidMount() {
    this.props.readPosts();
  }

  // votePost = (id, isUpvote) => {
  //
  // }

  render() {
    const { post } = this.props;
    const posts = post.allIds.map((id) => post.byId[id]);

    return (
      <div>
        <h1>Posts</h1>
        {posts.map((p) => (
          <Post
            key={p.id}
            id={p.id}
            title={p.title}
            user={p.user && p.user.username}
            votes={p.votes}
            upvotePost={() => this.votePost(p.id, true)}
            downvotePost={() => this.votePost(p.id, false)}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    readPosts: () => dispatch(readPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
