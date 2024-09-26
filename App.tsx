import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, useColorScheme, View } from 'react-native';


import { Colors } from 'react-native/Libraries/NewAppScreen';
import CrudOperationsScreen from './src/screens/CrudOperationsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import NewUserScreen from './src/screens/NewUserScreen';
import { AppScreens, HomeScreenProps } from './src/types/types';





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
        <Stack.Screen name="NewUser" component={NewUserScreen} />
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