import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, useColorScheme, View } from 'react-native';


import { Colors } from 'react-native/Libraries/NewAppScreen';
import CrudOperationsScreen from './src/screens/CrudOperationsScreen';
import WelcomeMessage from './src/screens/WelcomeMessage';
import NewUserScreen from './src/screens/NewUserScreen';
import UserCreation1 from './src/screens/UserCreation1';
import UserCreation2 from './src/screens/UserCreation2';
import UserCreation3 from './src/screens/UserCreation3';

import { AppScreens, HomeScreenProps } from './src/types/types';
import WelcomeScreen from './src/screens/WelcomeScreen';




function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to CRUD Operations"
        onPress={() => navigation.navigate('CrudOperations')}
      />
    </View>
  );
}

const Stack = createStackNavigator<AppScreens>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="CrudOperations" component={CrudOperationsScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} options ={{headerShown:false}} />
        <Stack.Screen name="UserCreation1" component ={UserCreation1} options={{ title: 'Step 1 of 3'}}  />
        <Stack.Screen name="UserCreation2" component ={UserCreation2} options={{ title: 'Step  2 of 3'}}  />
        <Stack.Screen name="UserCreation3" component ={UserCreation3} options={{ title: 'Step  3 of 3'}}/>
        <Stack.Screen name="WelcomeMessage" component = {WelcomeMessage} options= {{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;