import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeList from './src/screens/EmployeeList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeList">
        <Stack.Screen name="EmployeeList" component={EmployeeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
