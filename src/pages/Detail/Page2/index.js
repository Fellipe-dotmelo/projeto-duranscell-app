
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../../component/Dot';
import SizeButton from '../../../component/SizeButton';
import Button from '../../../component/Button';
import Footer from '../../../component/Footer';

export default function Page2({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Motorola Moto G8'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../../../src/assets/detail2.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$989,10</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Motorola Moto G8</Text>
         </View>

         <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
         </View>


         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
          Smartphone Motorola Moto E13 4G 64GB 4GB RAM Verde
          </Text>
          <Text style={styles.textList}>
            Marca:Motorola
          </Text>

          <Text style={styles.textList}>
            Nome do modelo:	2212ARNC4L
          </Text>  

          <Text style={styles.textList}>
            Operadora de celulares:	Todas as Operadoras
          </Text> 

          <Text style={styles.textList}> 
            Sistema operacional:	Android 11.0
          </Text>

          <Text style={styles.textList}> 
            Tecnologia celular:	5G
          </Text>
          
          <Text style={styles.textList}> 
            Bateria: 4000mAh
          </Text>

         </View>

        <Button />

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%', 
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});