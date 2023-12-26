import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyButtons from './Components/MyButtons';

const App = () => {
  const [myHistory,setmyHistory]=useState("0")
  const [calculation, setcalculation] = useState("0")
  const CalcBtnClick=(value)=>{
    if(calculation==="0"){
      setcalculation(value.toString())
    }
    else{
      setcalculation((calculation+value).toString())
    }
  }

  const calculateWholeValue=()=>{
    setmyHistory(calculation)
    setcalculation(eval(calculation));
  }
  const clearFunction=()=>{
    setcalculation("0")
  }
  const delFunction=()=>{
    if(typeof(calculation)!=='number')
    setcalculation(calculation.slice(0,-1));
  }
  console.log("calculation1",calculation);
  return (
    <View style={styles.container}>
      <Text style={styles.historyDesign}>
        {myHistory}
      </Text>
      <Text style={styles.mainScreen}>{calculation}</Text>
      <View style={styles.mainButtonWrapper}>
        <View style={styles.buttonsBox}>
          <MyButtons title={"C"} onClick={clearFunction} />
          <MyButtons title={"DEL"} onClick={delFunction} />
          <MyButtons title={"%"} onClick={CalcBtnClick} />
          <MyButtons title={9} onClick={CalcBtnClick} />
          <MyButtons title={8} onClick={CalcBtnClick} />
          <MyButtons title={7} onClick={CalcBtnClick} />
          <MyButtons title={6} onClick={CalcBtnClick} />
          <MyButtons title={5} onClick={CalcBtnClick} />
          <MyButtons title={4} onClick={CalcBtnClick} />
          <MyButtons title={3} onClick={CalcBtnClick} />
          <MyButtons title={2} onClick={CalcBtnClick} />
          <MyButtons title={1} onClick={CalcBtnClick} />
          <MyButtons title={'.'} onClick={CalcBtnClick} />
          <MyButtons title={0} onClick={CalcBtnClick} />
          <MyButtons title={"="} onClick={calculateWholeValue} />
        </View>
        <View style={styles.arithmiticButtons}>
          <MyButtons title={"+"} onClick={CalcBtnClick} arithmiticButton={true} />
          <MyButtons title={'-'} onClick={CalcBtnClick} arithmiticButton={true} />
          <MyButtons title={'*'} onClick={CalcBtnClick} arithmiticButton={true} />
          <MyButtons title={"/"} onClick={CalcBtnClick} arithmiticButton={true} />

        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  historyDesign:{
    fontSize:20,
    color:"#fff",
    padding:10,
    textAlign:"right",

  },
  container: {
    flex: 1,
    backgroundColor: '#272727',
    paddingTop: 50,
  },
  mainButtonWrapper: {
    flexDirection: "row",
    gap: 1
  },
  mainScreen: {
    width: '100%',
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: 'white',
    // textAlign:'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 20
  },
  buttonsBox: {
    flexDirection: 'row',
    gap: 1,
    flexWrap: "wrap",
    flex: 3,
    justifyContent: "center"
  },
  arithmiticButtons: {
    flex: 1,
    gap: 1
  }
})
export default App;