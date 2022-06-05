import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IPokemon} from './pokemon';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Pokedex: NavigatorScreenParams<PokedexStackParamList>;
};

export type PokedexStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {pokemon: IPokemon};
};

export type HomeStackScreenProps<T extends keyof PokedexStackParamList> =
  NativeStackScreenProps<PokedexStackParamList, T>;

export type PokemonStackParamList = HomeStackScreenProps<'PokemonDetail'>;
