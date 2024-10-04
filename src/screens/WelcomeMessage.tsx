import React, {useEffect,useState} from "react";
import { View,Text } from "react-native";
import { WelcomeMessageProps } from '../types/types';
import { getUserData } from "../services/api";
import CustomTitle from "../components/CustomTitle";
import Colors from "../constants/colors";


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

    <View>
       <CustomTitle
       textColor={Colors.black}
       title={`Welcome to Hourss,\n${userName}!`}></CustomTitle>
<Text></Text>
    </View>

);
    
};

export default WelcomeMessage;