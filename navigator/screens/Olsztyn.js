import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import olsztynZdj from '../assets/olsztynZdj.png';

const Olsztyn = () => {
  const [temperature, setTemperature] = useState('');
  const [temperaturef, setTemperaturef] = useState('');
  const [icon, setIcon] = useState('');
  const [info, setInfo] = useState('');
  const [windInfo, setwindInfo] = useState('');

  useEffect(() => {
    const Weather = async () => {
      const res = await fetch(
        'https://api.weatherapi.com/v1/current.json?key=134ac8576a1e44719c0213252230104&q=Olsztyn'
      );
      const data = await res.json();

      const temp = data.current.temp_c.toFixed(0);
      const tempf = data.current.temp_f.toFixed(0);
      const icon = data.current.condition.icon;
      const info = data.current.condition.text;
      const windInfo = data.current.wind_kph;
      setTemperature(temp);
      setTemperaturef(tempf);
      setIcon(icon);
      setInfo(info);
      setwindInfo(windInfo);
    };
    Weather();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={olsztynZdj} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            Olsztyn
          </Text>
          <Text style={styles.textInfo}>
            {info}
          </Text>
          <Image source={{ uri: 'https:' + icon }} style={styles.icon} />
          <Text style={styles.textInfo}>
            Prędkość wiatru: &nbsp;
            {windInfo} km/h
          </Text>
          <Text style={styles.textTemp}>
            {temperature}°C
          </Text>
          <Text style={styles.textTemp}>
            {temperaturef} °F
          </Text>
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
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: '70%',
  },
  textTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInfo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textTemp: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  icon: {
    width: 150,
    height: 150,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default Olsztyn;
