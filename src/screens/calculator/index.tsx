import { AntDesign, Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../../components/input';
import styles from './styles';

enum OperationsEnum {
  'SUM',
  'SUBTRACTION',
  'MULTIPLICATION',
  'DIVISION'
}

export function Calculator() {
  function clearResult() {
    setOperation(null);
    setResult(0);
  }

  function handleSum() {
    setOperation(OperationsEnum.SUM);
    setResult(firstValue + secondValue);
  }

  function handleSubtraction() {
    setOperation(OperationsEnum.SUBTRACTION);
    setResult(firstValue - secondValue);
  }

  function handleMultiplication() {
    setOperation(OperationsEnum.MULTIPLICATION);
    setResult(firstValue * secondValue);
  }

  function handleDivision() {
    setOperation(OperationsEnum.DIVISION);

    if (secondValue === 0) {
      Alert.alert('Aviso', 'Não pode fazer divisão por 0 (zero)!!!');
    } else {
      setResult(firstValue / secondValue);
    }
  }

  let [firstValue, setFirstValue] = useState<number>(0);
  let [secondValue, setSecondValue] = useState<number>(0);
  let [result, setResult] = useState<number>(0);
  let [operation, setOperation] = useState<OperationsEnum | null>();

  useEffect(() => {
    clearResult();
  }, [firstValue, secondValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>

      <Input
        editable={true}
        label='PRIMEIRO VALOR'
        value={firstValue}
        onChangeText={(text) => setFirstValue(Number(text))}
      />

      <Input
        editable={true}
        label='SEGUNDO VALOR'
        value={secondValue}
        onChangeText={(text) => setSecondValue(Number(text))}
      />

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleSum}>
          <Feather
            color={operation == OperationsEnum.SUM ? 'red' : 'lime'}
            name='plus'
            size={48}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSubtraction}>
          <Feather
            color={operation == OperationsEnum.SUBTRACTION ? 'red' : 'lime'}
            name='minus'
            size={48}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMultiplication}>
          <AntDesign
            color={operation == OperationsEnum.MULTIPLICATION ? 'red' : 'lime'}
            name='close'
            size={48}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDivision}>
          <Feather
            color={operation == OperationsEnum.DIVISION ? 'red' : 'lime'}
            name='divide'
            size={48}
          />
        </TouchableOpacity>
      </View>

      <Input
        centralize={true}
        editable={false}
        label='RESULTADO'
        value={result}
      />
    </View>
  );
}
