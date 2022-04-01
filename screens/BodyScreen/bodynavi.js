import { View, Text } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import Clothes from '../../components/body/clothes';
import Commu from '../../components/body/commu';
import Gallery from '../../components/body/gallery';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



const SubHead = ({navigation}) => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="Clothes" component={Clothes} onPress={() => navigation.navigate('Clothes')}/>
      <Tab.Screen options={{headerShown:false}}name="Commu" component={Commu} onPress={() => navigation.navigate('Commu')}/>
      <Tab.Screen options={{headerShown:false}}name="Gallery" component={Gallery} onPress={() => navigation.navigate('Gallery')}/>
    </Tab.Navigator>
    
  )
}
const Bodynavi = () => {
  return (
    <View>
      <MainHead/>
      <SubHead/>
      <Text>bodynavi</Text>
    </View>
  )
}

export default Bodynavi;