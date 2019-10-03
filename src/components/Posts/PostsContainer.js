import React, { Component } from 'react';
import {getPosts} from "../../services/post";
import Posts from "./Posts";
import {getUsers} from "../../services/user";

class PostsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
        };
    }

    async componentDidMount() {
       const fetchPosts =  await getPosts();
       const fetchUsers =  await getUsers();
       this.setState({posts : fetchPosts, users: fetchUsers});
    }

    render() {
        const {posts, users} = this.state;
        return <Posts posts={posts} users={users}/>;
    }
}

export default PostsContainer;
