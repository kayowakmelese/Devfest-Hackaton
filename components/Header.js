import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBell,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { View } from 'react-native'
import { styles } from '../style'


export const TabBar=(props)=>{

    return (
        <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#018ED5',padding:10}}>
            <FontAwesomeIcon icon={faArrowLeft} size={10} color={'white'}/>
            <Text style={styles.buttonText}>{props.name}</Text>

        </View>
    )
}