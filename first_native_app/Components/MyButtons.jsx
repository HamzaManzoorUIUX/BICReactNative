import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

const MyButtons = ({title,arithmiticButton,onClick}) => {
    return (
        <TouchableOpacity style={arithmiticButton?styles.arithmiticButton:styles.myButton} onPress={()=>onClick(title)}>
          <Text style={arithmiticButton?styles.textStyleDark:styles.textStyle}>
          {title}
          </Text>
        </TouchableOpacity>
    );
};
const styles=StyleSheet.create({
  myButton:{
    backgroundColor:'gray',
    width:'33%',
    height:100,
    justifyContent:'center',
    alignItems:"center"
    // flex:1,
  },
  arithmiticButton:{
    backgroundColor:'#fff',
    width:'100%',
    height:100,
    justifyContent:'center',
    alignItems:"center"
  },
  textStyle:{
    color:"white",
textAlign:'center',
fontSize:20
  },
  textStyleDark:{
    color:"#525252",
textAlign:'center',
fontSize:20
  }
})
export default MyButtons;