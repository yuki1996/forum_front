import React from 'react';
import PropTypes from 'prop-types';
import './PostDetails.scss';
import {TableBody, TableCell} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PostDetails = (props) => {
    const {post, user, comments} = props;

    return (
        <>
        {post == null ?
            <div>Post not found</div> :
            <div className='container-post-details'>
                <h1>
                    {post.title} by {user.username}
                </h1>
                <div>
                    {post.body}
                </div>
                <Paper className='comments'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    User
                                </TableCell>
                                <TableCell>
                                    Comment
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {comments.map((post) => {
                            const {id, postId, name, email, body} = post;
                            return (
                                <TableRow key={id}>
                                    <TableCell>
                                        {email}
                                    </TableCell>
                                    <TableCell>
                                        <div>
                                            {name}
                                        </div>
                                        <div>
                                            {body}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        }
        </>
    );
};

PostDetails.propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
};

export default PostDetails;