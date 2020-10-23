import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';

export default function App() {
  useEffect(() => {
    preventAutoHideAsync();
    setTimeout(() => {
      hideAsync();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
