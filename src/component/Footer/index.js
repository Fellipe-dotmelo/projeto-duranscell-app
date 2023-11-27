import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/3.png')} cost="R$1.498,00">
                    Redmi Note 9 Pro 64gb  
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/5.png')} cost="R$8.299,00">
                iPhone 14 Pro Max
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/6.png')} cost="R$920,00">
                Samsung A20 5G   
                </Shoes>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})