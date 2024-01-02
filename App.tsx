// import {Button, StyleSheet, View} from 'react-native';
// import React from 'react';

// import TrackPlayer from 'react-native-track-player';

// const App = () => {
//   React.useEffect(() => {
//     async function setupTrackPlayer() {
//       try {
//         await TrackPlayer.setupPlayer();
//         // Other configurations and options
//       } catch (e) {
//         console.error('Error setting up TrackPlayer:', e);
//       }
//     }
//     setupTrackPlayer();
//   }, []);

//   // const [isPlaying, setIsPlaying] = useState(false);

//   const start = async () => {
//     // Add a track to the queue
//     await TrackPlayer.add({
//       id: 'trackId',
//       url: 'https://catalyst--dev.s3.eu-north-1.amazonaws.com/mobile-cards/1703743392297-audio.m4a',
//       title: 'Track Title',
//       artist: 'Track Artist',
//     });

//     // Start playing it
//     console.log('pay track');

//     await TrackPlayer.play();
//   };
//   const pause = async () => {
//     await TrackPlayer.pause();
//   };
//   return (
//     <View>
//       <Button title="play button" onPress={start} />
//       <Button title="pause button" onPress={pause} />
//     </View>
//   );
// };

// export default App;

import React from 'react';
import AppNavigation1 from './src/navigation/navigation_friendspire';

const App = () => {
  return <AppNavigation1 />;
};

export default App;
