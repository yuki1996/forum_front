import React from 'react';
import PropTypes from 'prop-types';
import './PostDetails.scss';
import {TableBody, TableCell} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const PostDetails = (props) => {
    const {post, user, comments} = props;

    return (
        <>
        {post == null ?
            <div>Post not found</div> :
            <div className='container-post-details'>

                    <h1>
                        {post.title} by
                        <Link
                            key={user.id}
                            to={`/users/${user.id}`}
                            className='link'
                        >
                            {` ${user.username}`}
                        </Link>
                    </h1>
                <div>
                    {post.body}
                </div>
                <Paper className='comments'>
                    <Table>
                        <TableBody>
                        {comments.map((post) => {
                            const {id, name, email, body} = post;
                            return (
                                <TableRow key={id}>
                                    <TableCell>
                                        <div>
                                            <span>{email}:</span> {name}
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
    user: PropTypes.object,
};

export default PostDetails;