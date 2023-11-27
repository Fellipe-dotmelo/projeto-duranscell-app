import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Shoes from '../../component/Shoes';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner1.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>DURANS</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>CELL</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>MAIS VENDIDOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$1.884,99" onClick={()=> navigation.navigate('Detail') }>
          Galaxy A-33
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$989,10" onClick={()=> navigation.navigate('Page2') }>
          Moto G8 Plus 64gb
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$1.498,00" onClick={()=> navigation.navigate('Page3')}>
          Redmi Note 9 Pro 64gb
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$1.079,99" onClick={()=> navigation.navigate('Page4')}>
          LG K62 64GB
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$8.299,00" onClick={()=> navigation.navigate('Page5')}>
          iPhone 14 Pro Max
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$920,00" onClick={()=> alert('CLICOU')}>
          Samsung A20 5G
          </Shoes>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});