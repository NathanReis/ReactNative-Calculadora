import { Text, TextInput, View } from 'react-native';
import styles from './styles';

interface IInputProps {
  centralize?: boolean;
  editable?: boolean;
  label: string;
  value: number;
  onChangeText?: (text: string) => void;
}

export function Input(props: IInputProps) {
  let { centralize, editable, label, value, onChangeText } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        keyboardType='numeric'
        style={[
          styles.input,
          centralize && styles.textCenter,
          !editable && styles.readOnly
        ]}
        value={String(value)}
        onChangeText={onChangeText}
      />
    </View>
  );
}
