import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

// You can import from local files

// or any pure javascript modules available in npm

export default function App() {
  const [currentText, setCurrentText] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentText ? (
        <>
          <Focus addText={setCurrentText} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentText}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject = {() => setCurrentText(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.mainBackgroundColor,
  },
});
