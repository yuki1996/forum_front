import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.scss';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const UserDetails = (props) => {
    const {user} = props;

    if (user === null) {
        return <div>user not found</div>;
    }
    
    const { address, username, name, email, website, phone, company} = user;
    const addressing = address.suite.concat(', ', address.street, ', ', address.city, ', ', address.zipcode);
    const {lat, lng} = address.geo;
    const nameCompany = company.name.concat(', ', company.bs, ', ', company.catchPhrase);
    
    return (
        <div className='container-user-details'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {username}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        <div><span>Name:</span> {name}</div>
                        <div><span>Email:</span> {email}</div>
                        <div><span>Website:</span> {website}</div>
                        <div><span>Phone:</span> {phone}</div>
                        <div>
                            <span>Address: </span> {addressing}
                        </div>
                        <div>
                            <span>Latitude: </span>
                            {lat}
                        </div>
                        <div>
                            <span>Longitude: </span>
                            {lng}
                        </div>

                        <div>
                            <span>Company: </span>{nameCompany}
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
};

UserDetails.propTypes = {
    user: PropTypes.object,
};

export default UserDetails;