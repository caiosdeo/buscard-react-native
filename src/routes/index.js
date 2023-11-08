import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Cartao from '../components/Cartao';
import Recarga from '../components/Recarga';
import Config from '../components/Config';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#0066ff'
      }}>
        <Screen 
          name="Cartão" 
          component={Cartao} 
          options={{
            tabBarIcon: ({ size, color }) => <Feather name='credit-card' size={size} color={color}></Feather>
          }}>
        </Screen>
        <Screen 
          name="Recarga"
          component={Recarga}
          options={{
            tabBarIcon: ({ size, color }) => <Feather name='dollar-sign' size={size} color={color}></Feather>
          }}
        ></Screen>
        <Screen 
          name="Configuração" 
          component={Config}
          options={{
            tabBarIcon: ({ size, color }) => <Feather name='settings' size={size} color={color}></Feather>
          }}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  )
}