import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import LoginForm from '../components/Login/LoginForm';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LoginForm />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
