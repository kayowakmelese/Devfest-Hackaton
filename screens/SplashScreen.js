import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../style"

export const SplashScreen=()=>{
    return (
        <View style={styles.container}>
            <Image source={require('../images/bg.jpg')} style={{width:'100%',height:'100%'}} resizeMode={'cover'} />
            <View style={{position:'absolute',bottom:50,padding:10,width:'100%'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Signin</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

            </View>
            {/* < */}
        </View>
    )
}