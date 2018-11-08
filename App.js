import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import AppHeader from './components/AppHeader.js';
import VideoList from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';

const API_KEY = 'AIzaSyAdtqCC8Mt9QoPLkDVjTXbYSdyWtnHaT8w';

export default class App extends Component {

  state = {
    loading: false,
    term: '3iB1pZiEjWI',
    videos: [],
    selectedvideo: 'kN0iD0pI3o0'
  };

  onPressSearch = term => {
    this.searchYT(term);
    console.log(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({ 
        loading: false,
        videos
      });
    });
  }

  handleWatchButton = selectedvideo => {
    console.log(selectedvideo);    
    this.setState({ 
      selectedvideo
    });
  }
  

  render() {
    const { loading, videos, selectedvideo } = this.state;

    return (
      <View style={styles.container} >
        <AppHeader />
        <SearchBar 
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList 
          videos={videos} 
          onWatchPress={this.handleWatchButton}
        />  
        <VideoPlayer 
          selectedvideo={selectedvideo} 
        />
        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
};
