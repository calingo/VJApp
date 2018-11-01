import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';
import { Constants, Video } from 'expo';
import { Header } from 'react-native-elements';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import AppHeader from './components/AppHeader.js';
import VideoList from './components/VideoList.js';

const API_KEY = 'AIzaSyAdtqCC8Mt9QoPLkDVjTXbYSdyWtnHaT8w'

export default class App extends Component {

  state = {
    loading: false,
    term: '3iB1pZiEjWI',
    videos: []
  };

  onPressSearch = term => {
    this.searchYT(term);
    console.log(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({ 
        loading: false,
        videos: videos
      });
    });
  }

  render() {

    const { loading, videos } = this.state;

    return (
      <View style ={styles.container} >
        <AppHeader />
        <SearchBar 
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList videos={videos} />  
        <WebView 
            allowsInlineMediaPlayback={true}
            // style={styles.Videocontainer}
            javaScriptEnabled={true}
            thirdPartyCookiesEnabled={true}
            originWhitelist={['*']}
            source={{
              uri: 'https://www.youtube.com/watch?v=' + this.state.term + '?rel=0&autoplay=1&showinfo=0&controls=0&playsinline=1',
            }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black' ,
  }
};