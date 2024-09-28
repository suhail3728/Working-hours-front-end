import { StackNavigationProp } from '@react-navigation/stack';


export type AppScreens = {
    Welcome: undefined;
    NewUser: undefined;
    Home: undefined;
    UserCreation1:undefined;
    UserCreation2:undefined;

  CrudOperations: undefined;
  };


export type WelcomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Welcome'>;
export type HomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Home'>;
export type NewUserNavigationProp = StackNavigationProp<AppScreens, 'NewUser'>;
export type UserCreation1Prop = StackNavigationProp<AppScreens, 'UserCreation1'>;

export type UserCreation2Prop = StackNavigationProp<AppScreens, 'UserCreation2'>;

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
  };