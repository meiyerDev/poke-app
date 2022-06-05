import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IPokemon} from './pokemon';

export type RootStackParamList = {
  Home: undefined;
  Pokemon: {pokemon: IPokemon};
};

export type PokemonStackParamList = NativeStackScreenProps<
  RootStackParamList,
  'Pokemon'
>;
