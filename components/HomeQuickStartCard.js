import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();
import { styles } from '../assets/Styles';

export default class HomeQuickStartCard extends React.Component {
  render(){
    // Todo: use origion image as a template for sizing when creating real image
    // var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var base64Icon = 'https://images.fineartamerica.com/images-medium-large/sheer-mountain-face-roderick-bley.jpg';

    return (
      <View style={theme.cardStyle}>
        <Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
        <Text style={theme.cardTitleStyle}>Sini: day 1</Text>
        <Text style={theme.cardContentStyle}>
          Pick up where you left off on your latest path. 
        </Text>
        <Text style={theme.cardActionStyle}>Continue your path</Text>
      </View>
    )
  }
};
