import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import New from './pages/New';
// createStackNavigator
export default createAppContainer(
    createSwitchNavigator({
        Home,
        New,
    })
);
