import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.historyContainer}>
        Haven't started focussing yet? Give it a try!!!
      </Text>
    );

  const renderItem = ({ item }) => <Text style={styles.items}>-{item}</Text>;

  return (
    <View style={styles.heroContainer}>
      <Text style={styles.historyContainer}>
        Things we've focussed on till date:
      </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    padding: spacing.md,
    flex: 1,
  },
  historyContainer: {
    color: colors.textColor,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {
    fontSize: fontSizes.md,
    color: colors.textColor,
    paddingTop: spacing.sm,
    paddingLeft: spacing.lg,
  },
});
