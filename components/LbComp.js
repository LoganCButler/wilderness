import 'react-native';
import React from 'react';
import { MonoText } from './StyledText';
import renderer from 'react-test-renderer';

export class LbComponent extends React.Component {
  render() {
    return <MonoText>LB Compopent</MonoText>;
  }
}
