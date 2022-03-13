import React from 'react';
import { SafeAreaView,View,Text,StyleSheet,Dimensions } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';



const SWIDTH = Dimensions.get('window').width;


const ItemBox = (props) =>{
    const leftSwipe = () =>{
        return(<View style={styles.deleteBox}><Text>Delete</Text></View>)
    }
    return(
        <Swipeable
        
        renderLeftActions={leftSwipe}
        
        >
        <View style={styles.container}>
            <Text>My Name is {props.data.name}.</Text>
        </View>
        </Swipeable>        
    );
};

export default ItemBox;

const styles =StyleSheet.create({
    container: {
        height: 80,
        width: SWIDTH,
        backgroundColor:'white',
        justifyContent:'center',
        padding:16
    },    
});