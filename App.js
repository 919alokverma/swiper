import React,{useState} from 'react';
import { SafeAreaView,View,StyleSheet,Text,FlatList } from 'react-native';
import ItemBox from './src/coponents/ItemBox';


const data = [
  {id: '1',name: 'A'},
  {id: '2',name: 'B'},
  {id: '3',name: 'C'},
  {id: '4',name: 'D'},
  {id: '5',name: 'E'},
  {id: '6',name: 'F'},
  {id: '7',name: 'G'},
  {id: '8',name: 'H'},
  {id: '9',name: 'I'},
  {id: '10',name: 'J'}
]

const App = () =>{

  const [lists,setLists] = useState(data);

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
      data = {lists}
      renderItem={({item})=>{
        return <ItemBox data={item}/>
      }}
      ItemSeparatorComponent={()=>
       <View style={styles.seperatorLine}></View>
      }
      />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  seperatorLine:{
    height:1,
    backgroundColor:'black',
    

  }
})