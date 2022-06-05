import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {camelCase} from 'utils/camelCase';

interface Props {
  titleLeft: string;
  titleRight: string;
}

export const BoxTitle = ({titleLeft, titleRight}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleLeft]}>
        {`#${titleLeft.padStart(3, '0')}`}
      </Text>
      <Text style={styles.title}>{camelCase(titleRight)}</Text>
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
