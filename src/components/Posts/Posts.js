import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Posts.scss';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { FaUser} from 'react-icons/fa';

const Posts = (props) => {
    const {posts, users} = props;
    return (
        <div className="container-posts">
            <List>
                {posts.map((post) => {
                    const {id, userId, title, body} = post;
                    const user = users.find((user) => {
                        return user.id === userId
                    });
                    return (
                        <Fragment key={id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <FaUser />
                                    <div>{user.username}</div>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={title}
                                    secondary={body}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Fragment>
                    );
                })}

            </List>
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
};

export default Posts;