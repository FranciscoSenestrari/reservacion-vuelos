import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ButtonForm from '../../component/Button/ButtonForm';
import ButtonGoogle from '../../component/ButtonGoogle/ButtonGoogle';
import Input from '../../component/Input/Input';
import Footer from '../../component/Footer/Footer';
import {styles} from './style';
import ChBox from '../../component/CheckBox/ChBox';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const SignIn = ({navigation}) => {
  const [state, setstate] = useState({
    firstName: '',
    email: '',
    password: '',
    privacyPolicy: false,
    subscribeUpdates: false,
  });
  const handleChangeText = (name, value) => {
    setstate({...state, [name]: value});
  };

  const login = () => {
    console.log(state);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      console.log('Formulario enviado..');
      console.log(formValue);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Sing up</Text>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputError}>{formik.errors.firstName}</Text>
        <Input
          title="First Name"
          textContentType={'emailAddress'}
          keyboardType="email-address"
          value={formik.values.firstName}
          onChangeText={text => formik.setFieldValue('firstName', text)}
        />
        <Text style={styles.inputError}>{formik.errors.email}</Text>
        <Input
          title="Email*"
          textContentType="emailAddress"
          keyboardType="email-address"
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
        />
        <Text style={styles.inputError}>{formik.errors.password}</Text>

        <Input
          title="Password*"
          textContentType="password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={text => formik.setFieldValue('password', text)}
        />
      </View>
      <View>
        <Text>
          Use 8 or more character whit a mix of letter,numbers, and symbols.
        </Text>
      </View>
      <View style={styles.containerCheckBox}>
        <ChBox
          label="I agree to the"
          terms="Terms"
          and="and"
          privacy="Privacy Policy"
          asterisk="*"
        />
        <ChBox label="Subscribe for select product updates" />
      </View>
      <View style={styles.containerButton}>
        <ButtonForm title="Sing Up" onPress={formik.handleSubmit} />
        <Text style={styles.textButtonGroup}> or </Text>
        <ButtonGoogle title="Sign Up with Google" />
      </View>
      <Footer
        title="Already have an account?"
        redirect="Login"
        navigation={navigation}
        route="Login"
      />
    </View>
  );
};

function initialValues() {
  return {
    firstName: '',
    email: '',
    password: '',
  };
}

function validationSchema() {
  return {
    firstName: Yup.string().required('The user is oblitoried'),
    email: Yup.string().email().required('Email in use.Use a diferent email'),
    password: Yup.string().required('Incorrect password'),
  };
}
export default SignIn;
