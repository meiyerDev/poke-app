import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Box: FC = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0.25, y: 0.8}}
      end={{x: 0.65, y: 0}}
      colors={['#FFC5F9', '#E961FF']}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F289FD',
    width: '45%',
    height: 128,
    borderRadius: 24,
    marginVertical: '3%',
  },
});

export default Box;
