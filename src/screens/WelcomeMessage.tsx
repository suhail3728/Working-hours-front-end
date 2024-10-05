import React, {useEffect,useState} from "react";
import { View,Text, StyleSheet, Image } from "react-native";
import { WelcomeMessageProps } from '../types/types';
import { getUserData } from "../services/api";
import CustomTitle from "../components/CustomTitle";
import Colors from "../constants/colors";
import CustomButton from "../components/CustomButton";



const WelcomeMessage = ({route,navigation}:WelcomeMessageProps) => {
    const [userName, setUserName] = useState('');
    const userId = route.params?.userId;
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userData = await getUserData(userId); 
            setUserName(userData.name);
          } catch (error) {
            console.error('Error fetching user data:', error);
          
          }
        };
    
        fetchUserData();
      }, []);
return(

    <View style={styles.container}>
       <CustomTitle
       textColor={Colors.black}
       title={`Welcome to Hourss,\n${userName}!`}></CustomTitle>
<Text>Hey welcome to Hours, now you can see how we make your life easier</Text>
<Image source = {require('../assets/images/welcome.jpeg')} style = {styles.image}/>
<CustomButton
    backgroundColor={Colors.orange}
    borderColor={Colors.orange}
    onPress={()=> console.log('Lets go to homepage')}
    textColor={Colors.white}
    title={'Start Building My schedule'}
    ></CustomButton>
    </View>
   

);
    
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        flex:1,
    },
    image: {
        width: 300,
        height: 300,
        marginTop:10,
        marginBottom:0,
    
    }

});

export default WelcomeMessage;