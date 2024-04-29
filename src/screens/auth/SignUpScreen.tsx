import SimpleOverlappedLayout from '@/components/layouts/SimpleOverlappedLayout';
import { StyleSheet, View, Text } from 'react-native';
import { authStyles } from './styles/authStyles';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import SignUpLogo from '@/assets/images/signup-logo.svg';
import InputText from '@/components/elements/form/input/InputText';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { useState } from 'react';
import TermsCheckbox from '@/components/elements/form/checkbox/TermsCheckbox';
import MainButton from '@/components/elements/buttons/MainButton';
import { getFontSize } from '@/utils/getFontSize';
import { colors } from '@/styles/color';
import { SignUpNavProps } from '@/navigators/AuthStack';

const SignUpScreen = ({ navigation }: SignUpNavProps) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <SimpleOverlappedLayout>
      <View style={styles.container}>
        <Text style={authStyles.title}>Welcome to us,</Text>
        <Text style={authStyles.subtitle}>Hello there, create New account</Text>
        <View style={[authStyles.imageContainer, { marginTop: verticalScale(48) }]}>
          <SignUpLogo width={horizontalScale(213)} height={verticalScale(175)} />
        </View>
        <View>
          <InputText
            label="Username"
            placeholder="Username"
            value={username}
            onChangeText={(val) => setUsername(val)}
          />
          <InputText
            label="Phone"
            placeholder="Phone Number"
            value={phone}
            onChangeText={(val) => setPhone(val)}
            style={{ marginVertical: verticalScale(16) }}
          />
          <InputPassword
            label="Phone"
            placeholder="Phone Number"
            value={password}
            onChangeText={(val) => setPassword(val)}
            style={{ marginBottom: verticalScale(16) }}
          />
          <TermsCheckbox
            label=""
            containerStyle={{ marginVertical: verticalScale(16) }}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <MainButton
            onPress={() => {}}
            style={{ marginTop: verticalScale(4) }}
            contentStyle={{ paddingVertical: verticalScale(5) }}
          >
            Sign up
          </MainButton>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: verticalScale(8),
            }}
          >
            <Text style={{ fontSize: getFontSize(12), color: colors.neutral.main }}>
              Have an account?{' '}
            </Text>
            <Text
              style={{ color: colors.primary.main, fontWeight: '700' }}
              onPress={() => navigation.navigate('SignUp')}
            >
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(16),
  },
});

export default SignUpScreen;
