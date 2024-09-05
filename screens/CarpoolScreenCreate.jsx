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
      <Text style={styles.title}>Start din fælleskørsel</Text>

      <Text style={styles.paragraph}>
        Opret din sammenkørsel og del din rute med andre. Spar penge, mød nye mennesker, og rejs grønnere.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Tidspunkt</Text>
        <TextInput
          style={styles.input}
          placeholder="Indtast tidspunkt"
          value={input1}
          onChangeText={setInput1}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Pris pr. passager</Text>
        <TextInput
          style={styles.input}
          placeholder="Indtast pris"
          value={input2}
          onChangeText={setInput2}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Antal passagerer</Text>
        <TextInput
          style={styles.input}
          placeholder="Indtast antal"
          value={input3}
          onChangeText={setInput3}
        />
      </View>

      {/* Button to navigate to another screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CarpoolHomeScreen')}>
        <Text style={styles.buttonText}>Find other Carpools</Text>
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
});

export default CarpoolScreenCreate;
