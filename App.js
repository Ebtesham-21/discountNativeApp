import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ alignItems:'center', marginTop:40}}>
      <Text style={{fontSize: 22}}>Discount Calculator</Text>
      
    </View>
    <View style={{marginHorizontal: 40, marginTop: 40, marginBottom: 20}}>
      <Text style={{marginBottom: 10}}>Amount</Text>
      <TextInput 
        style={styles.input}
          
      />
    </View>
    <View style={{marginHorizontal: 40}}>
      <Text style={{marginBottom: 10}}>Discount(%)</Text>
      <TextInput 
        style={styles.input}
          
      />
    </View>
    <View style={{alignItems: 'center'}}>
       <TouchableOpacity style={ styles.btn}>
          <Text style={{color:'black'}}>
            Calculate
          </Text>
       </TouchableOpacity>
    </View>

    <Text
    style={styles.result}
    >
      The Amount After Discount is:
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
           padddingVertical: 20, 
           borderRadius: 10,
           borderColor: 'black',
           borderWidth: 1,
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
      color: 'green',
      textAlign: 'center',
      fontSize: 22,
      marginTop: 20,
  }
});
