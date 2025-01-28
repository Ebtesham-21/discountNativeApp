import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [result, setResult] = useState(0);

  const calculateDiscount = () => {
    const numAmount = parseFloat(amount);
    const numDiscount = parseFloat(discount);

    if(isNaN(numAmount) || isNaN(numDiscount)){
      setResult(0);
      return;
    }

    if(numDiscount === 0) {
      setResult(0);
      return;
    }

    const discountAmount = numAmount * (numDiscount / 100);
    setResult(discountAmount)
  };
  
 
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ alignItems:'center', marginTop:40}}>
      <Text style={{fontSize: 22}}>Discount Calculator</Text>
      
    </View>
    <View style={{marginHorizontal: 40, marginTop: 40, marginBottom: 10}}>
      <Text style={{marginBottom: 10}}>Amount</Text>
      <TextInput 
        style={styles.input}
        keyboardType = 'numeric'
        onChangeText={setAmount}
        value={amount}
      />
    </View>
    <View style={{marginHorizontal: 40, marginTop: 40, marginBottom: 20}}>
      <Text style={{marginBottom: 10}}>Discount(%)</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setDiscount}
        value={discount}
          
      />
    </View>
    <View style={{alignItems: 'center'}}>
       <TouchableOpacity style={ styles.btn}  onPress = {calculateDiscount}>
         
          <Text style={{color:'black'}}>
            Calculate
          </Text>
       </TouchableOpacity>
    </View>

    <Text
    style={[styles.result, {color: result ? 'green' : 'black'} ]}
    >
      The Amount After Discount is:
    </Text>
    <Text
    style={[styles.result, {color: result  ? 'green' : 'black'} ]}
    >
      {parseFloat(amount) - result}
    </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
 
  },
  input: {
           backgroundColor: 'white',
           padddingVertical: 30, 
           borderRadius: 10,
           borderColor: 'black',
           borderWidth: 1,
           fontSize: 20,
           textAlign: 'center',
  },
  btn: {
    backgroundColor: 'lightgreen',
    width: 80,
    height: 80,
    borderRadius: 10,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
      color: 'black',
      textAlign: 'center',
      fontSize: 22,
      marginTop: 20,
  }
});
