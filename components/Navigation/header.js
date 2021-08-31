import React from 'react'
import { View,Image,TouchableHighlight,Text} from 'react-native'
import styles from './styles';

const Header = ()=> {
    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
           <TouchableHighlight
                onPress={() => alert('Nav Menu Pressed!')}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Menu
                </Text>
                </View>
          </TouchableHighlight>
        </View>
    );
};
export default Header;
