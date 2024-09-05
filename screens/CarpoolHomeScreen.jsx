import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';




const CarpoolHomeScreen = () => {
  const navigation = useNavigation();
  // dato skal laves færdig - kig på din chatgpt Anton under Hyperlink Phone tråd
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
//

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find you TripBuddy!</Text>
      <Text style={styles.paragraph}>
        Welcome to our TripBuddy carpooling app! Find rides, share journeys, and connect with fellow travelers. 
        Make your travel experience more enjoyable and eco-friendly. 
        Find your ride today!
      </Text>

      <Text style={styles.inputTitle}>What's your destination?</Text>
      <TextInput style={styles.input} placeholder="Tell us what city" />
      
      <Text style={styles.inputTitle}>What date do you need the ride?</Text>
      <TouchableOpacity onPress={() => setShow(true)} style={styles.input}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
    style={styles.button} 
    onPress={() => navigation.navigate('CarpoolScreenList')}
  >
    <Text style={styles.buttonText}>Find Carpool List</Text>
  </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CarpoolScreenCreate')}
        >
          <Text style={styles.buttonText}>Create New Carpool</Text>
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
    marginVertical: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    marginLeft: 10,
  },
  input: {
    height: 50,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3D52D5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CarpoolHomeScreen;
