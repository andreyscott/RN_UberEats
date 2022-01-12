import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlaceAutoComplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlaceAutoComplete 
            placeholder='search me'
            styles={{
                textInput: {
                    backgroundColour: '#eee',
                    borderRadius: 20,
                    fontWeight: '600',
                    marginTop: 7,
                },
                textInputContainer: {
                    backgroundColour: '#eee',
                    borderRadius:50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                },
            }}
            renderButton ={() => {
                <View style={{ marginLeft: 10 }}>
                <Ionicons name="location-sharp" size={24} />
                </View>
            }}

             />
        </View>
    )
}
