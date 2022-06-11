import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  titleLeft: string;
  titleRight: string;
}

export const BoxTitle = ({titleLeft, titleRight}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleLeft]}>{titleLeft}</Text>
      <Text style={styles.title}>{titleRight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#595959',
    borderRadius: 16,
    bottom: '10%',
    elevation: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'absolute',
    width: '80%',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  titleLeft: {
    color: '#E684FF',
  },
});
