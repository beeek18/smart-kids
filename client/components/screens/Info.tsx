import { Button, Text, View, StyleSheet } from 'react-native';

export default function Info({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>ИНСТРУУКЦИЯ</Text>
      <Text>В этой игре 3 раунда: легкий, средний и простой.</Text>
      <Text>
        На каждой вопрос есть только один правильный ответю Неправильно написанные ответы не
        считаются.
      </Text>
      <Text>
        Игрокам не разрешается просить помощи с ответами, в том числе смотреть ответы в интернете.
      </Text>
      <Button onPress={() => navigation.navigate('Home')} title="Назад" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container1: {
    backgroundColor: 'yellow',
    padding: 10,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
