import React, {useState} from "react";
import { UserCreation4Props, } from "../types/types";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';
import CustomButton from "../components/CustomButton";

const UserCreation4 = ({navigation,route}:UserCreation4Props) => {
    const { name, business, mobileNumber, selectedPosition, adress, businessType,selectedNumOfEmployees } = route.params;

    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    return(
        <View>
        <TextInput
        style = {styles.emailInput}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        >
            
        </TextInput>
        <TextInput
        style = {styles.emailInput}
        placeholder="Create password"
        value={password}
        onChangeText={setPassword}
        >
            
        </TextInput>
        <Text>
            Password Requirements
        </Text>
        <Text>
           =8 characters
        </Text>
        <CustomButton
        backgroundColor={Colors.orange}
        borderColor={Colors.orange}
        onPress={()=>console.log('hey jude')}
        textColor={Colors.white}
        title={'Create account'}
    
        ></CustomButton>
        </View>
    );
        
    };

    const styles = StyleSheet.create({

        emailInput: {
            color: Colors.green,

        },

    }

       
    );




    export default UserCreation4

