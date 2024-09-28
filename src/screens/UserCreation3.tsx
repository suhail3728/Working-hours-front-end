import React, { useState } from 'react';
import { UserCreation3Props } from '../types/types';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';

const numOfEmplys: string[] = [
  '<20',
  '20-50',
  '50-80',
  '80+'
];


function UserCreation3({ navigation }: UserCreation3Props) {
  const [adress, setAdress] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [selectedNumOfEmployees, setSelectedNumOfEmployees] = useState(''); 

  const isNextButtonEnabled = 
    adress.trim() !== '' && 
    businessType.trim() !== '' && 
    selectedNumOfEmployees.trim() !== '';

  const handleNextPress = () => {
    console.log('Moving to next screen with position:', selectedNumOfEmployees);
    navigation.navigate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us a bit about your business</Text>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={adress}
            onChangeText={setAdress}
          />
        </View>
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Business Type</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type of business"
            value={businessType}
            onChangeText={setBusinessType}
          />
        </View>
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Number of Employees</Text>
      </View>
      <View style={styles.buttonGrid}>
        {numOfEmplys.map((num, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.numButton, 
              selectedNumOfEmployees === num && styles.numButtonSelected
            ]}
            onPress={() => setSelectedNumOfEmployees(num)}
          >
            <Text 
              style={[
                styles.numButtonText, 
                selectedNumOfEmployees === num && styles.numButtonTextSelected
              ]}
            >
              {num}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton, !isNextButtonEnabled && styles.nextButtonDisabled]}
          onPress={handleNextPress}
          disabled={!isNextButtonEnabled}
        >
          <Text style={[styles.nextButtonText, !isNextButtonEnabled && styles.nextButtonTextDisabled]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.black,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 17,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  label: {
    width: '30%',
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 70,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  numButton: {
    borderWidth: 1,
    borderColor: Colors.border,

    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25, 
    marginBottom: 10,
    width: '45%', 
    alignItems: 'center', 
  },
  numButtonSelected: {
    backgroundColor: Colors.orange,
  },
  numButtonText: {
    color: Colors.darkGray,
    fontSize: 16,
  },
  numButtonTextSelected: {
    color: Colors.white,
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  nextButton: {
    marginTop: 20,
    height: 60,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 7,
  },
  nextButtonDisabled: {
    backgroundColor: 'rgba(254, 104, 9, 0.5)',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButtonTextDisabled: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default UserCreation3;
