import * as React from 'react';
import { Text, View,Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Portal(){
    return(
        <WebView
        source={{uri:'https://portal.ceet.secti.es.gov.br'}}
        />
        );
    }


