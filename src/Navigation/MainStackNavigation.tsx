import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../Screens/Home';
import StorryDetails from '../Screens/StoryDetails';
import WebViews from '../Screens/WebView';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'Stories'}}
                />

                <Stack.Screen
                    name='StoryDetails'
                    component={StorryDetails}
                    options={{ title: 'Story Details'}}
                    // options={{ title: 'Story Details', headerLeft: () => null}}
                />

                <Stack.Screen
                    name='WebViews'
                    component={WebViews}
                    options={{ title: 'Web Views'}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;