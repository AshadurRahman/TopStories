import React, { FC } from 'react';
import { WebView } from 'react-native-webview';
import { Props } from './../Components/Interfaces';

const WebViews: FC<Props> = (props) => {

    return (
        <WebView
            originWhitelist={['*']}
            source={{ uri: props.route.params.Url }}
        />
    )
}

export default WebViews;
