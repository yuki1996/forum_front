import React, { Component } from 'react';
import {getUserById} from '../../services/user';
import UserDetails from './UserDetails';

class UserDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    async componentDidMount() {
        const { match } = this.props;
        const userId = match.params.id;
        const fetchUser =  await getUserById(userId);
        this.setState({user: fetchUser});
    }

    render() {
        const {user} = this.state;
        return <UserDetails user={user}/>;
    }
}

export default UserDetailsContainer;
