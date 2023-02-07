import React ,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput, FlatList,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';



export default function App() {
  let num=0;
  const elt={name:" ",key:num}


  const [goalElement,setupGoal]=useState(elt);
  const [todoList,setupList]=useState([]);

  const submitHandler=(text)=>{ {/*add goal Button Handler!!*/}
     num=Math.random();

    setupList((courseGoalList)=>{
      return [{name:text,key:num},...courseGoalList]
    })
  }

  const changeHandler=(val)=>{
    setupGoal(val);
  }
  const pressHandlerEnd=(val)=>{
    console.log(val);
        console.log(val.item.key);
        console.log(todoList);
        setupList((prevList)=>{return prevList.filter(eachtodo => val.item.key!=eachtodo.key);} );
  }

  
  
  const pressHandler=(val) =>{

    Alert.alert("Goal Completed!","Do you really gonna leave your goal: "+val.item.name+" ?",[{text: "Yes, i have done with it", onPress:()=>pressHandlerEnd(val)},{text:"No",onPress:()=>console.log("no cancel"),style:"cancel"}]);

  }
  

  

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}> 
   <View>
      <View >
        <TextInput style={styles.textInput} placeholder="Write your goal..." onChangeText={changeHandler} />
      </View>
      <View>
      <Button title="Boost Goal" onPress={()=>submitHandler(goalElement)} color="coral" />
      </View>
      <Text> To Do!</Text>
      <FlatList data={todoList} renderItem={({item})=>(<TouchableOpacity style={styles.touch} onPress={()=>pressHandler({item})} keyExtractor={item => item.item.key}>
            <Text style={styles.text}>
                {item.name}
            </Text>
        </TouchableOpacity>)} />
     
    

      </View>
      </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2d926",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop:30,
  },
  textInput:{marginBottom:10,textShadowColor:"#ffffff",padding:10,borderBottomWidth:1,borderBottomColor:"#ddd",backgroundColor:"#bcd726",borderRadius:18,marginTop:25,height:80,textAlign:"center"},
  goalContainerEach:{margin: 13,padding: 50,fontSize:23},
  goalContainer:{
    flex: 5,
  },
  touch:{borderRadius:12,backgroundColor:"#9191ff",marginBottom:12,marginHorizontal:10,padding:10,},

});
