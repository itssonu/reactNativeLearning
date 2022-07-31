import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryList from '../screen/CategoryList'
import AllFood from '../screen/AllFood'
import MyDrawer from './MyDrawer';

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="MyDrawer" component={MyDrawer} />
          <Stack.Screen name="All Food" component={AllFood} />
        </Stack.Navigator>
      );
}