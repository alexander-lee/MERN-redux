import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readPostById } from '../../actions';

export class PostInformation extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      user: PropTypes.shape({
        username: PropTypes.string,
      }),
      votes: PropTypes.number,
    }),
    readPostById: PropTypes.func,
  }

  componentDidMount() {
    this.props.readPostById(this.props.params.id);
  }

  render() {
    const { post = {} } = this.props;

    return (
      <div>
        <h1>{post.title}</h1>
        <div>{post.user && post.user.username}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const posts = _.get(state, 'post.byId');

  return {
    post: posts[ownProps.params.id],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    readPostById: (postId) => dispatch(readPostById(postId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInformation);
