import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationBarContainer extends Component {

    render() {
        const { location } = this.props;

        return <NavigationBar pathname={location.pathname}/>;
    }
}

export default withRouter(NavigationBar);


NavigationBarContainer.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
