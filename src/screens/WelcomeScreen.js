import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/welcome.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Welcome </Text>
      <CustomButton title = "Login" backgroundColor={Colors.green} borderColor={Colors.welcomeScreenBg} textColor={Colors.welcomeScreenBg} onPress={() => console.log ('Login Pressed')}>
          
      </CustomButton>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.welcomeScreenBg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen;