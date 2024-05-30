import ControllerInputText from '@/components/elements/form/input/ControllerInputText';
import InputText from '@/components/elements/form/input/InputText';
import { colors } from '@/styles/color';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { transferSchema } from './transferValidation';
import MainButton from '@/components/elements/buttons/MainButton';
import CustomCheckbox from '@/components/elements/form/checkbox/CustomCheckbox';

interface TransferFormDataI {
  amount: string;
  content: string;
  card: string;
  name: string;
}
interface TransferFormProps {
  onSubmit: (data: TransferFormDataI) => void;
}
const TransferForm = (props: TransferFormProps) => {
  const [checked, setChecked] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, disabled },
  } = useForm({
    resolver: yupResolver(transferSchema),
  });
  const onSubmit = (data: TransferFormDataI) => {
    props.onSubmit(data);
  };
  return (
    <View style={styles.container}>
      <ControllerInputText
        control={control}
        label="Name"
        name="name"
        error={errors.name?.message}
      />
      <ControllerInputText
        control={control}
        label="Card"
        name="card"
        error={errors.card?.message}
      />
      <ControllerInputText
        control={control}
        label="Amount"
        name="amount"
        inputProps={{ keyboardType: 'numeric' }}
        error={errors.amount?.message}
      />
      <ControllerInputText
        control={control}
        label="Content"
        name="content"
        error={errors.content?.message}
      />
      <CustomCheckbox
        label=""
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
        message="Save to directory of beneficiary"
      />
      <MainButton disabled={disabled} onPress={handleSubmit(onSubmit)}>
        Confirm
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 12,
    padding: 12,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default TransferForm;
