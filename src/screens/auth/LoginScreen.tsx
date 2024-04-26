import React, { useState } from 'react';
import SimpleOverlappedLayout from '@/components/layous/SimpleOverlappedLayout';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginImage from '@/assets/images/login-logo.svg';
import FingerprintImage from '@/assets/images/fingerprint.svg';
import { Button, TextInput } from 'react-native-paper';
import { LoginNavProps } from '@/navigators/AuthStack';

const LoginScreen = ({ navigation }: LoginNavProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SimpleOverlappedLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Hello there, sign in to continue</Text>
        <View style={styles.imageContainer}>
          <LoginImage />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            mode="outlined"
            label="User"
            placeholder="User"
            theme={{ roundness: 16, colors: { primary: colors.primary.main } }}
            style={{ marginBottom: 16 }}
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Password"
            right={<TextInput.Icon icon="eye" />}
            value={password}
            theme={{ roundness: 16 }}
            style={{ marginBottom: 16, backgroundColor: 'transparent' }}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry
          />
          <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
          </TouchableOpacity>

          <Button
            mode="contained"
            onPress={() => {}}
            style={{ borderRadius: 16, marginTop: 16 }}
            contentStyle={{ paddingVertical: 5 }}
            labelStyle={{ fontSize: getFontSize(16), color: colors.white }}
          >
            Sign in
          </Button>
          <View style={styles.imageContainer}>
            <FingerprintImage />
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Don't have an account? </Text>
            <Text style={{ color: colors.primary.main }} onPress={() => {}}>
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: getFontSize(28),
    fontWeight: 'bold',
    color: colors.primary.main,
  },
  subtitle: {
    fontSize: getFontSize(16),
    color: colors.neutral.main,
    fontWeight: '500',
  },
  imageContainer: {
    width: '100%',
    maxHeight: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  formContainer: {},
  forgotPasswordText: {
    color: colors.neutral.third,
  },
});

export default LoginScreen;
