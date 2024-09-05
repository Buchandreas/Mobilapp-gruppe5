import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, SafeAreaView } from 'react-native';

const ProfileScreen = ({navigation}) => {
  const userProfile = {
    name: "Jens Jensen",
    phoneNumber: "+45 12 21 12 21",
    carBrand: "Mercedes",
    profilePicture: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" // Replace with your image URL
  };

  // State for the scale animation
  const [scaleValue] = useState(new Animated.Value(1)); // Initial scale value

  // Function to handle button press animation
  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, // Scale up
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1, // Scale back to original size
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Dummy login function
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  // Dummy log off function
  const handleLogOff = () => {
    console.log("Log Off button pressed");
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: userProfile.profilePicture }} 
          style={styles.profilePicture} 
        />
        <Text style={styles.text}>{userProfile.name}</Text>
        <Text style={styles.text}>{userProfile.phoneNumber}</Text>
        <Text style={styles.text}>{userProfile.carBrand}</Text>

        {/* Log Off Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            animateButton();
            handleLogOff();
          }}
        >
          <Animated.Text style={[styles.buttonText, { transform: [{ scale: scaleValue }] }]}>
            Log ud
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50, // Round shape
    marginBottom: 20, // Space between picture and text
  },
  text: {
    fontSize: 18,
    color: '#333', // Dark text
    marginVertical: 5, // Space between lines
    textAlign: 'center', // Centered text
  },
  button: {
    backgroundColor: '#3D52D5', 
    paddingVertical: 20,
    width: 200,
    borderColor: '#fff',
    borderWidth: 2,
    margin: 'auto',
    marginTop: 20, // Space between buttons
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text
    fontSize: 20, // Very large text
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
