import React, {useEffect,useState} from "react";
import { View,Text } from "react-native";
import { WelcomeMessageProps } from '../types/types';
import { getUserData } from "../services/api";


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
        <Text>Hey {userName}</Text>
    </View>

);
    
};

export default WelcomeMessage;