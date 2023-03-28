import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity } from 'react-native';
import react , {useState} from 'react';


export default function App() {

  const [nome, setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const cadastro = () =>{
    alert(nome);
    alert(email);
    alert(senha);
  }
  // pronto para fazer chamada para o backend
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{ width: 200, height: 300 }} source={require('./assets/bob.jpg')} />

      <TextInput placeholder='Digite seu nome..' style={styles.TextInput} onChangeText={text=>setNome(text)}/>
      <TextInput placeholder='Digite seu e-mail' style={styles.TextInput} onChangeText={text => setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.TextInput} onChangeText={text => setSenha(text)} />
      
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
          <Text style={{color:'with',textAlign:'center'}} >Cadastrar!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    backgroundColor: '#000',
  },
  TextInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginTop:20,
  },
  btnCadastro:{
    width:'100%',
    height:40,
    backgroundColor:'#6e6cf5',
    borderRadius:20,
    justifyContent:'center',
    marginTop:40
}
});   
