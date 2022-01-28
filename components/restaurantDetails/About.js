import { View, Text, Image } from 'react-native';
import React from 'react';

const image = 
''

const title = 'Farmhouse Kitchen Restaurant';
  const address = '123 Main Street, New York, NY 10012';
  const description = 'Thai + Combo + Chicken + Seafood';
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
        {title}
      </Text>
    </View>
  );
}

const RestaurantImage = (props) => ( 
  <Image source={{url: props.image}}
  style={{width: '100%', height: 180}}
   />

);