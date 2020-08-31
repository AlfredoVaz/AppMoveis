import React from 'react';
import About from '../screens/about/index'
import Blogs from '../screens/blogs/index'
import Home from '../screens/home/index'
import Skills from '../screens/skills/index'
import Projects from '../screens/projects/index'
import Login from '../screens/login/index'
import Manager from '../screens/manager/Manager.js'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Routes() {

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" >
                    <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
                    <Stack.Screen name="Home" options={{title: ""}} component={Home} />
                    <Stack.Screen name="Skills" options={{title: ""}} component={Skills} />
                    <Stack.Screen name="Blogs" options={{title: ""}} component={Blogs} />
                    <Stack.Screen name="About" options={{title: ""}} component={About} />
                    <Stack.Screen name="Projects" options={{title: ""}} component={Projects} />
                    <Stack.Screen name="Manager" options={{headerShown: false}} component={Manager} /> 
                </Stack.Navigator>
            </NavigationContainer>
    )
}