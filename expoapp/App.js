import { Image, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/backgroundImg.png')} resizeMode='cover' style={styles.backImg} />
      <View style={styles.innerContainer1} >
        <Button />
      </View>
      <View style={styles.innerContainer2} >
        <TextInput style={styles.inputFIeld} placeholder='Enter text here' />
      </View>
      <View style={styles.innerContainer3} >
        <Image source={require('./assets/backgroundImg.png')} style={styles.myImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f0',
  },
  backImg: {
    width: '100%',
    height: "100%",
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
  },
  myImage: {
    width: 200,
    height: 300,
    objectFit: 'cover',
  },
  inputFIeld: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  innerContainer1: {
    // backgroundColor: "#f00",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  innerContainer2: {
    flex: 2,
    // backgroundColor: "#ff0",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  innerContainer3: {
    flex: 3,
    // backgroundColor: "#f0f",
    justifyContent: 'center',
    alignItems: 'center',

  },
});
