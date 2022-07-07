import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from '../../assets/icon/avion.svg';
const flightsCard = ({
  date,
  iso_destiny,
  iso_origin,
  destiny,
  origin,
  passenger,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.item}>
          <Text style={styles.otitle}>{iso_origin}</Text>
          <Text>{origin}</Text>
        </View>
        <View style={styles.icono}>
          <Icon width={40} height={40} />
        </View>
        <View style={styles.item}>
          <Text style={styles.dtitle}>{iso_destiny}</Text>
          <Text style={styles.toTex}>{destiny}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.ftext}>{date}</Text>
        <Text style={styles.ftext}>{passenger}</Text>
      </View>
    </View>
  );
};

export default flightsCard;
