import React, {useState} from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {Box, BoxTitle, BoxImage} from 'components/Box';
import {IPokemon} from 'interfaces';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item: IPokemon;
};

export const BoxPokemon = ({item}: Props) => {
  const [isPress, setIsPress] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Pokemon', {pokemon: item});
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
      onPress={onPress}>
      <View style={styles.container}>
        <Box isActive={isPress}>
          <BoxImage uri={item.front_default} />
          <BoxTitle titleLeft={item.id.toString()} titleRight={item.name} />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
