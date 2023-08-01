import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import send from './assets/Image/right-arrow.png';
import receive from './assets/Image/left-arrow.png';
 import { isWifiEnabled } from '@react-native-tethering/wifi';
 import {  } from '@react-native-tethering/hotspot';



const App = () => {
// const checkWifiResult =() => {
//   console.log('check wifi result');
//   isWifiEnabled.then((res) => {console.log(res)});
// }

  return (
    <>
      <View style={styles.mainDiv}>
        <View style={styles.heading}>
          <Text style={{fontSize: 25, color: 'white'}}>SHARE</Text>
          <Text style={{fontSize: 25, color: 'white'}}>HISTORY</Text>
        </View>
        <View
          style={{
            gap: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 60,
          }}>
          <Image
            source={send}
            tintColor={'black'}
            alt="sending arrow"
            style={styles.sendImage}
          />

          <Image
            source={receive}
            alt="sending arrow"
            style={styles.receiveImage}
            tintColor={'black'}
          />
        </View>
        <View
          style={{
            gap: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          <Text style={{color: 'lightblue', fontSize: 20}} >Send</Text>
          <Text style={{color: 'lightgreen', fontSize: 20}}>Receive</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: 'rgba(80, 80, 80,.5)',
    // borderRadius: 10,
    // borderWidth: 1,
    borderColor:'#707070' 
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: 50,
    color: 'white',
    paddingHorizontal: 16,
    zIndex: -1,
  },
  sendImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    transform: [{rotateZ: '-90deg'}],
    backgroundColor: 'lightblue',
  },
  receiveImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    transform: [{rotateZ: '-90deg'}],
    backgroundColor: 'lightgreen',
  },
});
export default App;
