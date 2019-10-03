import React from 'react';
import './NavigationBar.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FaHome} from 'react-icons/fa';

const NavigationBar = (props) => {

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton href='/' edge='start' color='inherit' aria-label='menu'>
                        <FaHome/>
                    </IconButton>
                    <Typography variant='h6'>
                        Forum
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavigationBar;
