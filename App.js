import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity, View ,SafeAreaView,TextInput,FlatList} from 'react-native';
   {/* <StatusBar style="auto" /> */}

export default function App() {
  let[todos,settodos]=useState( [
    { id: 1, title: "React Native" },
    { id: 2, title: "JavaScript" },
    { id: 3, title: "Node.js" },
    { id: 4, title: "TypeScript" },
 
  ])
  return (

    <SafeAreaView  style={styles.container}>

      <View >
      <Text style={[styles.appHeder,{ textAlign:'center'}]}>To-Do list</Text>
        <View>

        <TextInput style={[styles.input]} placeholder='enter title' />
        <TextInput style={[styles.input]} placeholder='enter discribtion' />

        </View>
        
    
    <TouchableOpacity style={styles.submitBtn}>
    <Text style={styles.text}>
      Add
    </Text>
    </TouchableOpacity>
    <View style={styles.dividerLine}/>
    
    <View style={styles.direction}>
    <TouchableOpacity style={[styles.filterBtn,styles.activeFilterBtn]}>
    <Text style={[styles.filterText,styles.activeFilterText]}>
      All
    </Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.filterBtn,styles.activeFilterBtn]}>
    <Text style={[styles.filterText,styles.activeFilterText]}>
     inProerass
    </Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.filterBtn,styles.activeFilterBtn]}>
    <Text style={[styles.filterText,styles.activeFilterText]}>
    Done
    </Text>
    </TouchableOpacity>
    </View>
    <View style={styles.dividerLine}/>

      
    <FlatList data={todos} keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <Text style={styles.box}>{item.title}</Text>
    )}
  
    />
      </View>

    </SafeAreaView>



  );
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    // flexDirection: 'row',
    // justifyContent:'center',
    textAlign:'center',
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  appHeder:{
    fontSize:20,
    marginTop:20,
    textTransform:'uppercase'
  },

  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "100%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    // width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    // width: 100,
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    // width: 40,
  width:"30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
  //my class
  direction: {
    // flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    // alignItems: 'center', 
  },
  box: {
    borderWidth: 1,       
    borderColor: 'black', 
    padding: 10,          
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', 
   margin:2, 
   borderRadius:5,
  },
});


