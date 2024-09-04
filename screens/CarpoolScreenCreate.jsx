import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const carpoolData = [
  {
    id: '1',
    driverName: 'John Doe',
    details: 'Going from New York to Boston.',
    time: 'Departure: 10:00 AM',
    imageUrl: 'https://example.com/driver1.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    driverName: 'Jane Smith',
    details: 'Traveling from San Francisco to Los Angeles.',
    time: 'Departure: 2:00 PM',
    imageUrl: 'https://example.com/driver2.jpg', // Replace with actual image URL
  },
  {
    id: '3',
    driverName: 'Alice Johnson',
    details: 'Heading from Chicago to Seattle.',
    time: 'Departure: 9:30 AM',
    imageUrl: 'https://example.com/driver3.jpg', // Replace with actual image URL
  },
  // Add more carpool options as needed
];

const CarpoolScreen = () => {
  const navigation = useNavigation(); // Hook to navigate to another screen

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.driverName}>{item.driverName}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carpoolData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      
      {/* Button to navigate to another screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tracking-page')}>
        <Text style={styles.buttonText}>Vælg carpool</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2, // For Android shadow
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circle image
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  button: {
    backgroundColor: '#3D52D5',
    paddingVertical: 15,
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

export default CarpoolScreen;
