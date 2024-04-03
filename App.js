// src/App.js
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import BookList from './BookList';
import SearchBar from './SearchBar';
import RTLToggle from './RTLToggle';
import useBooks from './useBooks';
import BookItem from './BookItem';

const App = () => {
  const { books, loading, error } = useBooks();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book Reading App</Text>
        <RTLToggle />
      </View>
      <SearchBar />
      <BookList books={books} loading={loading} error={error} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Header background color
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Header title color
  },
});

export default App;
