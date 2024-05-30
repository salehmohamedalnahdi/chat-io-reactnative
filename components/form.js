import React from 'react';
import {Text, View ,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"


export default function Form({socket}) {
    const validation =ValidationForm()

    const handleSubmit = (messages) => {
      if (messages.user && messages.message) {
        socket.emit('newmessage', messages);
      }
    };

    return (
    <View style={tw ` mt-1 flex `}>
        <Formik
        initialValues={{ user: '', message: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          handleSubmit(values);
          
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={tw `my-1 border-2 rounded-2xl border-red-500 h-12 px-2`}
              placeholder='type user'
              onChangeText={props.handleChange('user')}
              value={props.values.user}
            />
            <TextInput
            multiline 
            style={tw `mb-1 border-2 rounded-2xl border-red-500 h-20 px-2`}
            placeholder='type message'         
            onChangeText={props.handleChange("message")}
            value={props.values.message}
            />
             <Button color='brown' title="Send" onPress={props.handleSubmit} /> 
          </View>
        )}

      </Formik>
    </View>
  )
}



