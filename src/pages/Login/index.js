import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILHomeSecurity} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors, fonts} from '../../utils';
import LottieView from 'lottie-react-native';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <View style={styles.page}>
        <View height={100} width={100}>
          <LottieView source={ILHomeSecurity} autoPlay loop />
        </View>
        <Text style={styles.title}>Login</Text>
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" secureTextEntry={true} />
        <Gap height={10} />
        <Link title="Forgot Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
        <Gap height={30} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Link title="Create New Account" size={16} align="center" />
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
