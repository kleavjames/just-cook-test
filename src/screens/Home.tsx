import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';
// importing the root styles
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useRecipes} from '../hooks/useRecipes';
import {CardRecipe} from '../components';
import {Recipe} from '../types/recipe';
import {fontPixel, pixelSizeHorizontal} from '../theme/normalize';

export default function Home() {
  const {styles} = useStyles(stylesheet);

  const {data, isLoading} = useRecipes();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const renderRecipes: ListRenderItem<Recipe> = ({item}) => (
    <CardRecipe recipe={item} />
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
  list: {gap: fontPixel(16), paddingHorizontal: pixelSizeHorizontal(16)},
}));
