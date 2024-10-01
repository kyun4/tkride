import {Text,Image,View, StyleSheet,TextInput,TouchableOpacity,Dimensions} from 'react-native';
import React,{useState} from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function SignUp(){

    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState("")

    const x_dimensions = Dimensions.get('window').width
    const y_dimensions = Dimensions.get('window').height

    const styler = StyleSheet.create({
        page_title: {
            fontSize: 21,
            fontWeight:"bold",
            color:"#494547",
            textAlign:"left"            
        },
        signup_field: {
            borderColor:"#E7E1E1",
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 4
        },
        signup_field_short_address: {
            borderColor:"#E7E1E1",
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 4,
            width: x_dimensions -200
        }
    })

    const onLogin = () => {

          router.navigate("/")  

    }

    return(
        <View style = {{ paddingHorizontal:30, marginTop: 70 }}>

            <View style = {{ flexDirection:"row", alignItems:"center", marginBottom: 20 }}>

                <TouchableOpacity onPress = {onLogin}>
                    <FontAwesome5 name = "arrow-left" size = {15} style = {{ marginRight: 15 }}></FontAwesome5>
                </TouchableOpacity>                

                <Text style = { styler.page_title }>Create your Account</Text>

            </View>

            <View>
                <View>
                    <Text style = {{ marginLeft: 0, marginBottom: 5, fontSize: 14, fontWeight:"300" }}>Personal Information</Text>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "First Name"></TextInput>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Last Name"></TextInput>
                </View>
            </View>

            
            <View style = {{ marginTop: 20 }}>
                <View>
                    <Text style = {{ marginLeft: 0, marginBottom: 5, fontSize: 14, fontWeight:"300" }}>Contact Information</Text>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Email Address"></TextInput>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Mobile Number"></TextInput>
                </View>
            </View>

            <View style = {{ marginTop: 20 }}>

                <View>
                    <Text style = {{ marginLeft: 0, marginBottom: 5, fontSize: 14, fontWeight:"300" }}>Address</Text>
                </View>

                <View style = {{ flexDirection:"row", justifyContent:"space-between" }}>

                    <View>
                        <TextInput style = { styler.signup_field } placeholder = "House/Lot No."></TextInput>
                    </View>

                    <View>
                        <TextInput style = { styler.signup_field_short_address } placeholder = "Street"></TextInput>
                    </View>

                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Village"></TextInput>
                    <Picker selectedValue = {selectedCity} style = {styler.signup_field} onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
                        
                        <Picker.Item label = "(Select Your City)" value = ""></Picker.Item>
                        <Picker.Item label = "Taguig City" value = "1"></Picker.Item>
                        <Picker.Item label = "Makati City" value = "2"></Picker.Item>
                        <Picker.Item label = "Paranaque City" value = "3"></Picker.Item>
                        <Picker.Item label = "Pasay City" value = "4"></Picker.Item>
                        
                    </Picker>
                </View>
            </View>

            <View style = {{ flexDirection:"row", justifyContent:"flex-end", marginTop: 10 }}>
                <View style = {{backgroundColor:"#FD8A02", width: "50%", flexDirection:"row", alignItems:"center", justifyContent: "center", padding:10, borderRadius: 20}}>
                    <Text style = {{color:"#FFF", fontWeight: "bold", fontSize: 16}}>Next</Text>
                    <FontAwesome5 name = "arrow-right" size = {12} style = {{marginLeft: 15}} color ="#FFF"></FontAwesome5>
                </View>
            </View>
          
        </View>
    );

}