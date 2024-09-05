import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [scaleValue] = useState(new Animated.Value(1));

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    // Navigate to the MainTabs screen
    navigation.replace('MainTabs');

    // Optionally display the entered email and password
    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Velkommen til Carpooling</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          animateButton();
          handleLogin();
        }}
      >
        <Animated.Text style={[styles.buttonText, { transform: [{ scale: scaleValue }] }]}>
          Login
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    
    
  },
  header: {
    fontSize: 48, // Huge text
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 40,
    color: '#000000', // Lime green
    textAlign: 'center',
  },
  input: {
    height: 60, // Large height
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Yellow background
    fontSize: 24, // Large font size
    color: '#000000', // Blue text
  },
  button: {
    backgroundColor: '#3D52D5', 
    paddingVertical: 20,
    width: 200,
    borderColor: '#fff',
    borderWidth: 2,
    margin: 'auto',
    marginTop: 50,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text
    fontSize: 20, // Very large text
    fontWeight: 'bold',
  },
});

export default Login;
