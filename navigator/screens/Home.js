import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import landscape from '../assets/landscape.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={landscape} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.textLogo}>Lepsza Pogoda Interia</Text>
          <View style={styles.spacer}></View>
          <Text style={styles.text}>Sprawdź jaka jest dzisiaj pogoda!</Text>
        </View>
      </ImageBackground>
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
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  spacer: {
    height: '20%',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  textLogo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    margin: 20,
  },
});

export default Home;
