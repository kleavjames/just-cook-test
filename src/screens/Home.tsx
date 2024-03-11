import React from 'react';
import {Text, View} from 'react-native';
// importing the root styles
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export default function Home() {
  const {styles} = useStyles(stylesheet);

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
