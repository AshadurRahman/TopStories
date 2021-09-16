import React, { FC } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Props } from '../Components/Interfaces';
import styles from '../Components/Styles';
import WebViews from './WebView';

const StorryDetails: FC<Props> = (props) => {
  const {navigation} = props;

  return (
      <View style={styles.container}>
        <Text style={styles.sectionDescription}>Title: {props.route.params.Title}</Text> 
        <Button title='Open Webview'
          onPress={() => navigation.navigate('WebViews', {
                                  Url: props.route.params.Url,
                              })}/>
        
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('WebViews', {
                                  Url: props.route.params.Url,
                              })} >
          <Text style={styles.floatIcon}> {'<'} </Text>
        </TouchableOpacity>
        {/* <WebViews {...props}/> */}
        {/* <WebView source={{ uri: props.route.params.Url }} /> */}
      </View>
      
  );
};

export default StorryDetails;
