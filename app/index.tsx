import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, StyleSheet, TextInput,SafeAreaView, Image, Dimensions, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';


export default function Index() {


  const router = useRouter();

  const x_dimensions = Dimensions.get('window').width
  const y_dimensions = Dimensions.get('window').height

  const onSignUp = () => {
    router.navigate("/signup");
  }

  const onHomeMenu = () => {
    router.navigate("/menu_customer/home")
  }

  const style = StyleSheet.create({
    image_logo_container: {
      alignItems:"center",
      justifyContent:"center",
      marginBottom: 25
    },
    image_logo: {
      height: 100,
      width: 100,
      alignItems:"center",
      justifyContent:"center"
    },
    login_textfield: {
      backgroundColor:"#FFF",
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal: 10,
      paddingVertical: 12,
      borderRadius: 10,
      borderColor:"#FD8A02"
    },
    textfield_default: {
      width: "100%",
      color:"#494547"
    },
    login_title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#FD8A02",
      textAlign: "center",
      marginBottom: 10
    },
    button_login: {
      paddingHorizontal: 10,
      backgroundColor:"#FD8A02",
      borderRadius: 25,
      paddingVertical: 15
    },
    button_signup: {
      paddingHorizontal: 10,
      backgroundColor:"#494547",
      borderRadius: 25,
      paddingVertical: 15
    },
    text_login: { color:"#FFF", textAlign:"center", fontWeight:"300", fontSize: 16 },
    signup_via_button: {     
      borderColor: "#FD8A02",
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 20,
      height: 35,
      width: "100%",
      marginBottom: 5,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },

    signup_labels: {
      width: x_dimensions - 220,
      color:"#FD8A02"
    }

  })

  return (

    
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 40
      }}
    >

      <SafeAreaView>

        <View style = { style.image_logo_container }>
          <Image style = { style.image_logo } source = {require('@/assets/images/tkridelogo1.png')}></Image>
          <Text style = {{ fontSize: 10 }}>RIDE NOW</Text>
        </View>

     
        <View style = { style.login_textfield }>
          <View>
            <FontAwesome5 name = "user" size = {15} style = {{ marginRight: 15, marginLeft: 10 }} color = "#FD8A02"></FontAwesome5>
          </View>         
          <TextInput style = { style.textfield_default }  placeholderTextColor = "#494547"  placeholder = "Email/Username"></TextInput>
        </View>

        <View style = {{ height: 5 }}></View>
      
        <View style = { style.login_textfield }>
          <View>
            <FontAwesome5 name = "lock" size = {15} style = {{ marginRight: 15, marginLeft: 10 }} color = "#FD8A02"></FontAwesome5>
          </View>         
          <TextInput style = { style.textfield_default } secureTextEntry placeholderTextColor = "#494547"  placeholder = "Password"></TextInput>
        </View>
  
        <View style = {{ height: 15 }}></View>

        <TouchableOpacity onPress={onHomeMenu} style = {style.button_login}>
         
            <Text style = { style.text_login }>Login</Text>
        
        </TouchableOpacity>

        <View style = {{ height: 15 }}></View>

        <View style = {{ flexDirection:"row", justifyContent:"center", alignItems:"center", marginBottom: 15 }}>   
          <View style = {{ width: x_dimensions-250, backgroundColor: "#E7E1E1", height: 1, marginRight: 10 }}></View>     
          <Text style = {{ fontSize: 12 }}>Or</Text>
          <View style = {{ width: x_dimensions-250, backgroundColor: "#E7E1E1", height: 1, marginLeft: 10 }}></View>     
        </View>
  
        <TouchableOpacity onPress={onSignUp} style = {style.button_signup}>
        
          <Text style = { style.text_login }>Create an Account</Text>
     
        </TouchableOpacity>
        
       
      </SafeAreaView>

    </View>
  );
}
