import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarpoolHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carpool Home</Text>
      <Text style={styles.paragraph}>
        Welcome to our carpooling app! Find rides, share journeys, and connect with fellow travelers. 
        Make your travel experience more enjoyable and eco-friendly. 
        Join our community today!
      </Text>

      <Text style={styles.inputTitle}>Input 1</Text>
      <TextInput style={styles.input} placeholder="Enter something..." />
      
      <Text style={styles.inputTitle}>Input 2</Text>
      <TextInput style={styles.input} placeholder="Enter something else..." />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CarpoolScreenList')}
        >
          <Text style={styles.buttonText}>Go to Carpool List</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CarpoolScreenCreate')}
        >
          <Text style={styles.buttonText}>Go to Create Carpool</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3D52D5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 24,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarpoolHomeScreen;
