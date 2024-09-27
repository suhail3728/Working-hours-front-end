import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NewUserProps } from '../types/types';
import { IconButton } from 'react-native-paper';
function NewUserScreen  ({ navigation }:NewUserProps) {
  return (
    <View style={styles.container}>
      
     
      <IconButton 
        icon="close" 
        size={24} 
        style={styles.closeButton} 
        onPress={() => navigation.goBack()} 
      />
     
      <Text style={styles.title}>New User Screen</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
});

export default NewUserScreen;