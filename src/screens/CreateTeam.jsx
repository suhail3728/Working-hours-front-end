import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const positions = [
  'Team Leader',
  'Developer',
  'Designer',
  'Project Manager'
];

const PositionSelectionScreen = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  const handleNextPress = () => {
    // Here you would typically navigate to the next screen
    console.log('Moving to next screen with position:', selectedPosition);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your position in the team?</Text>
      <View style={styles.buttonGrid}>
        {positions.map((position) => (
          <TouchableOpacity
            key={position}
            style={[
              styles.button,
              selectedPosition === position && styles.selectedButton
            ]}
            onPress={() => handlePositionSelect(position)}
          >
            <Text style={styles.buttonText}>{position}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedPosition && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextPress}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.5%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedButton: {
    borderColor: '#8A2BE2',
    borderWidth: 2,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#8A2BE2',
    borderRadius: 25,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PositionSelectionScreen;