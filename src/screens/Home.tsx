import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
// importing the root styles
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useRecipes} from '../hooks/useRecipes';

export default function Home() {
  const {styles} = useStyles(stylesheet);

  const {data, isLoading} = useRecipes();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.typography,
    fontSize: theme.size.base,
  },
}));
