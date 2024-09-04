import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' }} // Replace with actual image URL
        style={styles.profilePicture}
      />

      <Text style={styles.label}>Navn: Jens Jensen</Text>
      <Text style={styles.label}>Kontakt: +45 12 21 12 21</Text>
      <Text style={styles.label}>Email: jens.jensen@example.com</Text>
      <Text style={styles.label}>Køretøj: Mercedes</Text>

      <Text style={styles.infoText}>Tidspunkt: 09:30 - 10:00</Text>
      <Text style={styles.infoText}>Pris: 25,- kr</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CarpoolScreenAccept')}
      >
        <Text style={styles.buttonText}>Accepter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
    textAlign: 'left',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#3D52D5',
    paddingVertical: 15,
    paddingHorizontal: 30,
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

export default TrackingScreen;
