import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const carpoolData = [
  {
    id: '1',
    driverName: 'John Doe',
    details: 'Going from New York to Boston.',
    time: 'Arrival: 10:00 AM',
    imageUrl: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    driverName: 'Jane Smith',
    details: 'Traveling from San Francisco to Boston.',
    time: 'Arrival: 2:00 PM',
    imageUrl: 'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid', // Replace with actual image URL
  },
  {
    id: '3',
    driverName: 'Alice Johnson',
    details: 'Heading from Chicago to Boston.',
    time: 'Arrival: 9:30 AM',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHB0U1E8gz5P4iXQV0c2H49CRo_9F72YokQ&s', // Replace with actual image URL
  },
  // Add more carpool options as needed
];

const CarpoolScreenList = () => {
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CarpoolHomeScreen')}>
        <Text style={styles.buttonText}>Find other Carpools</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
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

export default CarpoolScreenList;
