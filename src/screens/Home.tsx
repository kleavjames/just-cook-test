import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Pressable,
  View,
} from 'react-native';
// importing the root styles
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useRecipes} from '../hooks/useRecipes';
import {CardRecipe} from '../components';
import {Recipe} from '../types/recipe';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../theme/normalize';
import {useNavigation} from '@react-navigation/native';
import {RecipeDetailNavigationProp} from '../types/navigation';

export default function Home() {
  const navigation = useNavigation<RecipeDetailNavigationProp>();
  const {styles} = useStyles(stylesheet);

  const {data, isLoading} = useRecipes();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const renderRecipes: ListRenderItem<Recipe> = ({item}) => (
    <Pressable
      onPress={() => navigation.navigate('RecipeDetail', {data: item})}>
      <CardRecipe recipe={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={recipe => recipe.uuid}
        data={data || []}
        contentContainerStyle={styles.list}
        renderItem={renderRecipes}
      />
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    gap: fontPixel(16),
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(16),
  },
}));
