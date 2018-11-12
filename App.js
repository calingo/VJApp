import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import AppHeader from './components/AppHeader.js';
import VideoList from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';

const API_KEY = 'AIzaSyAdtqCC8Mt9QoPLkDVjTXbYSdyWtnHaT8w';

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
}); 

export default class App extends Component {
  state = {
    loading: false,
    term: '',
    videos: [],
    selectedvideo: 'oUyVpolNkec',
    searching: false,
  };

  onPressSearch = term => {
    this.searchYT(term);
    console.log(term);
  };

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({
        loading: false,
        searching: true,
        videos,
      });
    });
  };

  handleWatchButton = selectedvideo => {
    console.log('1', selectedvideo);
    this.setState({
      selectedvideo: selectedvideo.videoId,
      searching: false,
    });
  };

  render() {
    console.log('render', this.state.selectedvideo);
    const { loading, videos, selectedvideo, searching } = this.state;

    return (
      <View style={styles.container}>
          <AppHeader />
          <SearchBar loading={loading} onPressSearch={this.onPressSearch} />
          {searching ? (
            <VideoList videos={videos} onWatchPress={this.handleWatchButton} />
          ) : (
            <VideoPlayer selectedvideo={selectedvideo}  />
          )}
      </View>
    );
  }
}
