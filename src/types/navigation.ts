import {RouteProp} from '@react-navigation/native';
import {Recipe} from './recipe';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTab: undefined;
  RecipeDetail: {data: Recipe};
};

export type RecipeDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RecipeDetail'
>;

export type RecipeDetailRouteProp = RouteProp<
  RootStackParamList,
  'RecipeDetail'
>;
