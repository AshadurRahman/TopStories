import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Props } from '../Components/Interfaces';
import styles from '../Components/Styles';
import { WebView } from 'react-native-webview';

const StorryDetails: FC<Props> = (props) => {
  const {navigation} = props;
  
  return (
      <View style={styles.container}>
        <Text style={styles.sectionDescription}>Title: {props.route.params.Title}</Text>

        <WebView
            source={{ uri: props.route.params.Url }}
            style={styles.webView}
            originWhitelist={['*']}
        />
        
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Home')} >
          <Text style={styles.floatIcon}> {'<'} </Text>
        </TouchableOpacity>
      </View>
      
  );
};

export default StorryDetails;
