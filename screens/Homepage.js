import { Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
export const Homepage=(props)=>{
    return (
        <SafeAreaView>
            <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={faBell}/>
            </View>
         </SafeAreaView>
    )
}