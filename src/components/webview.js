import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWebView extends Component {
    render() {
        return (
            <WebView
                ref={(ref) => this.webView = ref}
                source={{ uri: 'https://www.website.com.br/camera-access.html' }}
            />
        );
    }
}
