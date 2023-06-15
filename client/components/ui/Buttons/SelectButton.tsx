import { StyleSheet, Text, View } from 'react-native';

type SelectButtonProps = {
  option: {
    id: number;
    title: string;
  };
};

export default function SelectButton({ option }: SelectButtonProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{option?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
});
