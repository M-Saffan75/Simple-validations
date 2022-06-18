import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dimensions from 'react-native'
import { SafeAreaView , StatusBar , FlatList , Image } from 'react-native'
const { width, height } = Dimensions.get('window');

const slides = [
  {
    id:'1',
    image:require('./images/image1.png'),
    title:'Best Digital Solution',
    subtitle:'Actually We are working on react native',
  },
  {
    id:'2',
    image: require('./images/image2.png'),
    title:'Best Digital Solution',
    subtitle:'Actually We are working on react native',
  },
  {
    id:'3',
    image:require('./images/image3.png'),
    title:'Best Digital Solution',
    subtitle:'Actually We are working on react native',
  },

]

const Slide = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={{height:'75%' , width ,resizeMode:'contain'}}/>
        <Text style={styles.title }>{item.title}</Text>
        <Text style={styles.subtitle }>{item.subtitle}</Text>
      </View>
    );
}


const NewSlide = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList contentContainerStyle={{ height: height * 0.75 }} data={slides} renderItem={({item}) => <Slide item={item}/>}/>
      <Text>lorem</Text>
    </SafeAreaView>
  )
}

export default NewSlide

const styles = StyleSheet.create({})