import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

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

import * as Actions from '../state/reducer.js';

const theme = getTheme();
import { styles } from '../assets/Styles';

class HomeQuickStartCard extends React.Component {
  render(){
    // Todo: use origion image as a template for sizing when creating real image
    // var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var base64Icon = 'https://images.fineartamerica.com/images-medium-large/sheer-mountain-face-roderick-bley.jpg';

    const { userContext, setUserContext } = this.props;
    return (
      <View style={theme.cardStyle}>
        <Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
        <Text style={theme.cardTitleStyle}>Sini: day 1: {userContext}</Text>
        <Text style={theme.cardContentStyle} onPress={() => setUserContext('MEDITATE')}>
          Pick up where you left off on your latest path. 
        </Text>
        <Text style={theme.cardActionStyle}>Continue your path</Text>
      </View>
    )
  }
};

const mapStateToProps = state => {
  return {
    userContext: state.userContext,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeQuickStartCard);
