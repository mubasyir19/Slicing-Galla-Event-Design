import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Explore, Favorite, Ticket, Profile} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
