import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { isDisplayZoomed } from 'react-native-zoomed';

export default function App() {
  const isZoomed = isDisplayZoomed();
  return (
    <View style={styles.container}>
      {<Text>Is zoomed: {String(isZoomed)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
