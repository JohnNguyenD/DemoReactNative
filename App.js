import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.titlePurple, styles.title]}>Purple: #c9c9ff</Text>
      </View>

      <View >
        <Text style={[styles.titleBlue, styles.title]}>Blue: #3d85c6</Text>
      </View>
      <View >
        <Text style={[styles.titleGreen, styles.title]}>Green: #96cc96</Text>
      </View>
      <View >
        <Text style={[styles.titleYellow, styles.title]}>Yellow: #f4b940</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    marginTop: 16,
    borderColor: 'white',
    paddingVertical: 70,
    borderWidth: 2,
    borderRadius: 6,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  titlePurple: {
    backgroundColor: "#c9c9ff",
  },
  titleBlue: {
    backgroundColor: "#3d85c6",
  },
  titleGreen: {
    backgroundColor: "#96cc96",
  },
  titleYellow: {
    backgroundColor: "#f4b940",
  }
});