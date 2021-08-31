import React from 'react'
import { View,Text,ImageBackground } from 'react-native'
import styles from './styles';
import StyledButton from '../StyledButton/button';

const CarItem = (props)=> {

    const {name,textline,tagline,image} = props.car;

    return (
      <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {textline}
          {' '}
          <Text style={styles.subtitletag}>
            {tagline}
          </Text>
        </Text>
      </View>

    <View style={styles.buttonsContainer}>
    <StyledButton 
    type="primary" 
    content={"Custom Order"}
    onPress={()=>{
    console.warn("Custom Order was pressed")
    }}
    />

    <StyledButton 
    type="secondary" 
    content={"Existing Inventory"}
    onPress={()=>{
    console.warn("Existing Inventory was pressed")
    }}
    /> 
    </View>
    </View>
    );
};
export default CarItem;
