import { View, Text, Image } from 'react-native';
import React from 'react';

const image = 
'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

const title = 'Farmhouse Kitchen Restaurant';
  const address = '123 Main Street, New York, NY 10012';
  const description = 'Thai + Combo + Chicken + Seafood';
export default function About() {
  return (
    <View>
      {/* <RestaurantImage image={image} /> */}
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => ( 
  <Image source={{url: props.image}}
  style={{width: '100%', height: 180}}
   />

);

const RestaurantTitle = (props) => {
  <Text style={{
    fontSize: 29,
    fontWeight: 600,
    marginTop:10,
    marginHorizontal: 15,

  }}>
  {props.title}

  </Text>
}

const RestaurantDescription = (props) => (
  <Text
  style={{
    fontWeight: 400,
    marginTop: 10,
    marginHorizontal: 15,
    fontSize:14.5,
  }}
  >
    {props.description}
  </Text>
)