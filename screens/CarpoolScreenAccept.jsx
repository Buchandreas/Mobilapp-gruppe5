// ImageScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CarpoolScreenAccept = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CarpoolHomeScreen');
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/pd9zd36/Check.png' }} // Replace with your image URL
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default CarpoolScreenAccept;
