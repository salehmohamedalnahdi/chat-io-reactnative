import {Text, View ,ScrollView,Button,TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Form from "../components/form" 
import React, { useEffect, useState } from 'react';
import SocketIO from 'socket.io-client';


const socket = SocketIO('https://back-zsxy.onrender.com');


export default function HomeScreen({ navigation }) {

   const [data,setData]= useState([])
   useEffect(()=>{
    socket.on('message',(result) => {
      setData((prevData) => [...prevData, result]);
      
    });

  },[socket])
   
    return (
    <View style={tw `mt-1`}>
      <View style={tw `mx-2 mt-12 `}>
      <ScrollView>
       {data && (
        data.map(item=><>
         <View style={tw ` px-2 mb-1 w-60 border rounded-2xl `}>
            <Text style={tw `font-semibold px-2 text-blue-400 `}>{item.user}</Text>
            <View >
              <Text style={tw `px-2 pb-1`}>{item.message}</Text>
            </View>
         </View>  
        </>)
       )}
       <Form socket={ socket }/>
      </ScrollView>
      </View>
    </View>
  )
}



/* <ScrollView>
              {data ? (
               data.map((item)=> <>
               <Text key={item.id} style={tw`text-white font-semibold `}>Title: {item.title} </Text>
               <Text style={tw`text-white `}>Discription: </Text>
               </>)
              ) : (<Text></Text> )
              }
              </ScrollView>*/