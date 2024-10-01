import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';



export type AppScreens = {
    Welcome: undefined;
    NewUser: undefined;
    Home: undefined;
    UserCreation1:undefined;
    UserCreation2:{ selectedPosition: PositionType | null };
    UserCreation3:{name:string, business: string, mobileNumber?:string, selectedPosition: PositionType|null};
    WelcomeMessage:undefined;

  CrudOperations: undefined;
  };
export  type PositionType = 'Manager' | 'Owner/Operator' | 'Employee' | 'Other';

export type UserCreation2RouteProp = RouteProp<AppScreens, 'UserCreation2'>;
export type UserCreation3RouteProp = RouteProp<AppScreens, 'UserCreation3'>;


export type WelcomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Welcome'>;
export type HomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Home'>;
export type NewUserNavigationProp = StackNavigationProp<AppScreens, 'NewUser'>;
export type UserCreation1Prop = StackNavigationProp<AppScreens, 'UserCreation1'>;
export type UserCreation2Prop = StackNavigationProp<AppScreens, 'UserCreation2'>;
export type WelcomeMessageProp = StackNavigationProp<AppScreens, 'WelcomeMessage'>;


export type UserCreation3Prop = StackNavigationProp<AppScreens, 'UserCreation3'>;

export type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
  };

export type WelcomeScreenProps = {
    navigation: WelcomeScreenNavigationProp;
  };
  
  export type NewUserProps = {
    navigation: NewUserNavigationProp;
  };

  export type UserCreation1Props = {
    navigation: UserCreation1Prop;
  };
  export type UserCreation2Props = {
    navigation: UserCreation2Prop;
    route:UserCreation2RouteProp;
  };
  export type UserCreation3Props = {
    navigation: UserCreation3Prop;
    route: UserCreation3RouteProp;
  };
  export type WelcomeMessageProps = {
    navigation: WelcomeMessageProp;
  };