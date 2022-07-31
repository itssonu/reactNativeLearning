import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryList from '../screen/CategoryList'
import AllFood from '../screen/AllFood'

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Food App" component={CategoryList} />
          <Stack.Screen name="AllFood" component={AllFood} />
        </Stack.Navigator>
      );
}