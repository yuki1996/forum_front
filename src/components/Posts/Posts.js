import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Posts.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Posts = (props) => {

    const {posts, users} = props;

    return (
        <div className='container-posts'>
            <List>
                {posts.map((post) => {
                    const {id, userId, title, body} = post;
                    const user = users.find((user) => {
                        return user.id === userId
                    });
                    return (
                        <Fragment key={post.id}>
                            <ListItem alignItems='flex-start'>
                                <div className='user'>
                                    <Link
                                        key={userId}
                                        to={`/users/${userId}`}
                                        className='link'
                                    >
                                        <ListItemAvatar>
                                            <>
                                                <FaUser />
                                                <div>{user.username}</div>
                                            </>
                                        </ListItemAvatar>
                                    </Link>
                                </div>
                                <ListItemText
                                    primary={
                                        <Link
                                            key={id}
                                            to={`/${id}`}
                                            className='link'
                                        >{title}
                                        </Link>
                                    }
                                    secondary={body}
                                />
                            </ListItem>
                            <Divider variant='inset' component='li' className='separator'/>
                        </Fragment>
                    );
                })}

            </List>
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.array,
};

export default Posts;