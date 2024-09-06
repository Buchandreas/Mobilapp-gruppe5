import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Animated, ImageBackground,Image } from 'react-native';

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
    <ImageBackground 
      source={{ uri: 'https://i.ibb.co/BjhQ8gB/openart-image-LJt32-Jn9-1724919521455-raw-1.png' }} // Replace with your background image URL
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo at the top */}
        <Image
          source={{ uri: 'https://i.ibb.co/1KKCf3M/Group.png' }} // Replace with your logo URL
          style={styles.logo}
          resizeMode="contain"
        />
        
        <Text style={styles.header}>Welcome to TripBuddy!</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input1}
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
        <Text style={styles.signup}>
          Sign up with email ➤
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  logo: {
    width: 200, // Adjust the size to your preference
    height: 200,
    alignSelf: 'center', // Centers the logo horizontally
  },
  header: {
    fontSize: 48, // Huge text
    fontWeight: 'bold',
    marginBottom: 60,
    color: '#000000', // Lime green
    textAlign: 'center',
  },
  input: {
    height: 60, // Large height
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    fontSize: 24,
    color: '#000000',
  },
  input1: {
    height: 60, // Large height
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    fontSize: 24,
    color: '#000000',
  },
  button: {
    backgroundColor: '#3D52D5', 
    paddingVertical: 20,
    width: 200,
    borderColor: '#fff',
    alignSelf: 'center',
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signup: {
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    color: '#3D52D5',
    marginBottom: 200,
    fontWeight: 'bold',
  }
});

export default Login;
