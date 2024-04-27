import SimpleOverlappedLayout from '@/components/layous/SimpleOverlappedLayout';
import { StyleSheet, View, Text } from 'react-native';
import { authStyles } from './styles/authStyles';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import SignUpLogo from '@/assets/images/signup-logo.svg';
import InputText from '@/components/elements/form/input/InputText';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { useState } from 'react';
import TermsCheckbox from '@/components/elements/form/checkbox/TermsCheckbox';

const SignUpScreen = () => {
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
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
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
