import React from 'react';
import { Button } from 'react-native-elements';

const WatchButton = ({ videoId, onWatchPressListItem }) => {
    return <Button
         title="Watch"
         icon={{ name: 'play-arrow' }}
         backgroundColor='transparent'
         onPress={() => onWatchPressListItem({ videoId })}
             // WebBrowser.openBrowserAsync(
             //     `https://m.youtube.com/watch?v=${videoId}`
             // );
     />
 };
 
 export default WatchButton;
