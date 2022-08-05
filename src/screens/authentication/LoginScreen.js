

 import React from 'react';


 import {
 View,
Text,
   StyleSheet,Image,Button,TextInput,TouchableOpacity
 
 } from 'react-native';
 
import logo from '../../assets/logo.png'
import eye from '../../assets/eye.png'
 
import { Formik } from 'formik';
 
 const LoginScreen= ({navigation}) => {

 
 
 
   return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={logo}></Image>
           
       
            </View>
           <View style={styles.loginTitle}>
            <Text style={styles.loginTitleText}>Welcome Back,</Text>
            <Text style={styles.loginTitleText}>Angela Christina</Text>
       
            </View>
            <View style={styles.loginInputView}>
              <View style={{marginTop:50,marginLeft:20}}>
              <Text style={styles.loginText}>Login</Text>
              </View>
              <Formik
     initialValues={{ password: '********',userName:'christina.angela123' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View >
        <View style={{margin:20}}>
      
        <TextInput
											name="userName"
											value={values.userName}
											placeholder="Username/Email"
                      
										
											style={{ borderBottomWidth:1,borderBottomColor:"#9D9B9B",marginBottom:20  }}
										/>
                    <View style={{flexDirection:"row"}}>

             

                      <TextInput
											name="password"
											value={values.password}
											placeholder="Password"
                      
											autoCompleteType="password"
										
											secureTextEntry={true}
							
											style={{ borderBottomWidth:1 ,borderBottomColor:"#9D9B9B",width:"100%"}}
										/>
                        <Image source={eye} style={{width:24,height:20,position:"absolute",right:10,marginTop:20}}/>
                       </View>
                    <Text style={{alignSelf:"flex-end",paddingTop:5,color:"#4F4F4F"}}>Forgot password?</Text>
        </View>
        <View style={{ alignItems: 'center',justifyContent:"center",marginTop:30 }}>
				<TouchableOpacity
		
					style={styles.appButtonContainer}
				onPress={() => navigation.navigate('HomeTab')}
				>
					<Text style={styles.appButtonText}>Login</Text>
				</TouchableOpacity>
        <View style={{flexDirection:"row",marginVertical:50}}>

      
      <Text style={{color:"#181818"}}>Don’t have an account?</Text>
  
      <TouchableOpacity
					// onPress={}
          onPress={() => navigation.navigate('Register')}
				>
					<Text style={{color:"#51C3FE"}} >Register</Text>
				</TouchableOpacity>
        </View>
			</View>
      
        
       </View>
     )}
   </Formik>
           
            </View>
    
     </View>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
		flex: 1,
	
		backgroundColor: '#F5F5F5',
	
	},
    logo: {
	
		alignItems: 'center',
	marginTop:50,

    
		justifyContent: 'center',
	},
  loginTitle: {
	
		alignItems: 'center',

  marginVertical:30,
    
		justifyContent: 'center',
	},
   loginTitleText:{
    fontSize:24,
  
    color:"#181818"
    

   },
   loginInputView:{
    flex:2,
    backgroundColor:"#FDFDFD",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  
   },
loginText:{
  fontSize:18,
  color:"#181818",


},
appButtonContainer: {
  elevation: 8,
  backgroundColor: '#51C3FE',
  borderRadius: 6,
  paddingVertical: 12,
  paddingHorizontal: 12,
  width:  285,
  height:54
},
appButtonText: {
  fontSize: 14,
  color: '#FDFDFD',
 
  alignSelf: 'center',
  
},
 });
 
 export default LoginScreen;
 