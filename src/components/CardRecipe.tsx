import React, {FC} from 'react';
import {Image, StyleProp, Text, View, ViewProps, ViewStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../theme/normalize';
import {Recipe} from '../types/recipe';
import {loadRecipeImage} from '../utils/helper';

type CardRecipeProps = {
  cardStyle?: StyleProp<ViewStyle>;
  recipe?: Recipe;
} & ViewProps;

const CardRecipe: FC<CardRecipeProps> = ({cardStyle, recipe, ...rest}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View {...rest} style={[styles.container, cardStyle]}>
      <Image
        source={loadRecipeImage(recipe?.images.small!)}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.text}>{recipe?.title}</Text>
        <Text style={styles.text}>{recipe?.description}</Text>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    borderRadius: fontPixel(16),
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    shadowColor: theme.colors.typography,
    shadowOffset: {
      width: 0,
      height: heightPixel(2),
    },
    shadowOpacity: 0.1,
    shadowRadius: fontPixel(12),

    elevation: fontPixel(2),
  },
  content: {
    flexDirection: 'column',
    gap: 10,
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(16),
  },
  image: {
    height: 'auto',
    width: widthPixel(130),
    borderTopLeftRadius: theme.size.base,
    borderBottomLeftRadius: theme.size.base,
  },
  text: {
    color: theme.colors.typography,
    fontSize: theme.size.base,
  },
}));

export default CardRecipe;
