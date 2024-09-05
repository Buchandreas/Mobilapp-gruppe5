import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

const CarpoolScreenCreate = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleSubmit = () => {
    // Handle button press here
    console.log('Input1:', input1);
    console.log('Input2:', input2);
    console.log('Input3:', input3);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Start your carpooling</Text>

      <Text style={styles.paragraph}>
        Create your carpool and share your route with others. Save money, meet new people, and travel greener.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Time</Text>
        <TextInput
          style={styles.input}
          placeholder="Time of departure"
          value={input1}
          onChangeText={setInput1}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Price per passenger</Text>
        <TextInput
          style={styles.input}
          placeholder="How much"
          value={input2}
          onChangeText={setInput2}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Number of passengers</Text>
        <TextInput
          style={styles.input}
          placeholder="How many"
          value={input3}
          onChangeText={setInput3}
        />
      </View>

      {/* Button to navigate to another screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CarpoolHomeScreen')}>
        <Text style={styles.buttonText}>Create carpool</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3D52D5',
    paddingVertical: 15,
    marginHorizontal: 50,
    marginBottom: 10,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarpoolScreenCreate;
