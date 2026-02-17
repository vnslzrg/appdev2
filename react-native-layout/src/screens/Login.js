import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/login.png')}
        />
        <Text style={styles.title}>Login</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#ff69b4" />
          <TextInput placeholder="Enter your email" placeholderTextColor="#ffb6c1" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#ff69b4" />
          <TextInput placeholder="Enter your password" placeholderTextColor="#ffb6c1" secureTextEntry style={styles.input} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? <Text style={styles.link}>Sign up</Text></Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6f0', 
  },

  /* Header */
  header: {
    flex: 1,
    backgroundColor: '#ffb6c1',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#ff69b4",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ff1493',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff1493',
    fontFamily: 'Cochin',
  },

  /* Content Section */
  contentSection: {
    flex: 2,
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: "#ff69b4",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#ff1493',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#ff69b4',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: "#ff1493",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* Footer */
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#ff1493',
    fontSize: 16,
    marginTop: 15,
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
