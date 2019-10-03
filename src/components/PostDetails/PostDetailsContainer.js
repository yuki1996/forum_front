import React, { Component } from 'react';
import {getPostById} from '../../services/post';
import PostDetails from './PostDetails';
import {getUserById} from '../../services/user';
import {getComments} from '../../services/comment';

class PostDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: null,
            user: null,
            comments: []
        };
    }

    async componentDidMount() {
        const { match } = this.props;
        const postId = match.params.id;
        const fetchPost =  await getPostById(postId);
        const fetchUser =  await getUserById(fetchPost.userId);
        const fetchComments =  await getComments(postId);
        this.setState({
            post : fetchPost,
            user: fetchUser,
            comments: fetchComments
        });
    }

    render() {
        const {post, user, comments} = this.state;
        return <PostDetails post={post} user={user} comments={comments}/>;
    }
}

export default PostDetailsContainer;
