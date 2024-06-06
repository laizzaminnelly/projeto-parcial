import {useState} from'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import{ styles} from './styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [forgotButton, setForgotButton] = useState<string>('')

  //Função de esqueci minha senha
  const handleForgoButton = () => {
    setForgotButton ('esqueci')
    alert(passwordField)
  }
  
  //Função do Botão Entrar
  const handleLoginButton = () => {
    alert(emailField)
  
  }

  // Função do cadastre-se
  const handleSignUpButton = () => {
  }

  return (
    <ScrollView style={styles.scrollview}>
     {forgotButton != 'esqueci' &&
      <>
    
      <View style={styles.container1}>
        <Text style={styles.h1}>Português ( Brasil ) </Text>
        <Image style={styles.logo} source={require('./components/logo.png')}/>
        <Text style={styles.h1}></Text>
        
        
        <View style={styles.inputArea}>
          <TextInput 
          style={styles.inputField}
          placeholder='Nome de usuário, email ou número de celular'
          placeholderTextColor='#bfbfbf'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
           style={styles.inputField}
           placeholder='Senha' 
           placeholderTextColor='#bfbfbf'
           value={passwordField}
           onChangeText={t => setPasswordField(t)}
           autoCapitalize='none'
           secureTextEntry
           />
        </View>

       <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgoButton}>
            <Text style={styles.forgoBtnText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button2} onPress={handleLoginButton}>
          <Text style={styles.buttonText2}>Criar nova conta</Text>
        </TouchableOpacity>

       <View style={styles.footerArea}>
       <Image style={styles.meta} source={require('./components/meta.png')}/>
          <Text style={styles.footerText}>Criado por Laizza Minelly</Text>
        </View>
      </View>
      </>
     }
     {forgotButton == 'esqueci' &&
        <>
    <View style={styles.container2}>
         <Text style={styles.inputLabel}>E-mail</Text>
        <Text style={styles.h2}>Encontre sua conta</Text>
        <Text style={styles.h3}>Insira seu nome de usuário, email ou número de celular.</Text>
        <Text style={styles.h4}>Não consegue redefinir sua senha?</Text>
         <View style={styles.inputArea}>
    
          <TextInput 
          style={styles.inputField}
          placeholder='Nome de usuário, email ou número de celular'
          placeholderTextColor='#bfbfbf'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
          <Text style={styles.inputLabel}>Talvez você receba notificações nossas no WhatsApp e por SMS para fins de segurança e login.</Text>
        </View>

        <TouchableOpacity style={styles.forgotButton} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Laizza Minelly </Text>
           <Image style={styles.meta} source={require('./components/meta.png')}/>
        </View>
      </View>
      </>
     }
   </ScrollView>
  )
}