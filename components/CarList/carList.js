import React from 'react'
import { View,FlatList,Dimensions } from 'react-native'
import styles from './styles';
import cars from '../CarList/cars';
import CarItem from '../CarItem/car';

const CarList = (props)=> {

    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};
export default CarList;
