import Button from './components/Button';
import { ReturnButton, DivideButton, PercentButton, PlusButton, MinusButton, EqualButton, MultiButton, PlusMinusButton } from './components/Button';
import Output, { InputNumbers } from './components/Calc';
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexOutput}>
        <View style={styles.flexRow}>
          <View style={[styles.flexColumn, {gap: 5}]}>
              <InputNumbers /> 
              <Output />
          </View>
        </View>
      </View>
      <View style={styles.flexInput}>
        <View style={[styles.flexRow, {paddingTop: 42, paddingBotton: 20, paddingHorizontal: 30,}]}>
          <View style={styles.flexColumn}>
            <Button title='AC' />
            <Button title='7' />
            <Button title='4' />
            <Button title='1' />
            <ReturnButton title='>' />
          </View>
          <View style={styles.flexColumn}>
            <PlusMinusButton title='+/-' />
            <Button title='8' />
            <Button title='5' />
            <Button title='2' />
            <Button title='0' />
          </View>
          <View style={styles.flexColumn}>
            <PercentButton title='%' />
            <Button title='9' />
            <Button title='6' />
            <Button title='3' />
            <Button title='.' />
          </View>
          <View style={styles.flexColumn}>
            <DivideButton title='divide' />
            <MultiButton title='X' />
            <MinusButton title='-' />
            <PlusButton title='+' />
            <EqualButton title='=' />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#22252E',
  },
  flexOutput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 25,

  },
  flexInput: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#292D36',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 42,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  flexItem: {

  },
  flexRow: {
    flexDirection: 'row',
    gap: 15,
  },
  flexColumn: {
    flexDirection: 'column',
    gap: 20,
  }
});
