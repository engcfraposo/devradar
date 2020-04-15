import  React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main'
import Profile from './pages/Profile'

const AppStack = createStackNavigator();
      
function Routes(){ 
    return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Main">
        <AppStack.Screen 
            name="Main" 
            component={Main} 
            options={{
                title: 'DevRadar',
                headerStyle: {
                  backgroundColor: '#7d40e7',
                  },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        />
        <AppStack.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                title: 'Perfil no Github',
                headerStyle: {
                  backgroundColor: '#7d40e7',
                  },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );}

export default Routes