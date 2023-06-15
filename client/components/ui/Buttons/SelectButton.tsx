import { StyleSheet, Text, View } from 'react-native';
import { QuestionType } from '../../../types/question/QuestionType';
import { useAppDispatch } from '../../../features/redux/hooks';
import { Image } from 'react-native-elements';
import { ImagesAssets } from '../../../assets/imageAssets';

type Props = {
  option: {
    id: number;
    title: string;
  };
  question: QuestionType;
  answered: boolean;
};

export default function SelectButton({ option, question, answered }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{option?.title}</Text>
      <View style={{ position: 'absolute', right: 10, top: 10 }}>
        <Image
          style={{
            ...styles.imageCrown,
            opacity: answered && question.answer === option.title ? 1 : 0,
          }}
          source={ImagesAssets.crown}
        />
      </View>
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
    alignContent: 'center',
    marginLeft: 10,
    fontFamily: 'Jingle',
  },
  imageCrown: {
    width: 37,
    height: 37,
    // position: 'absolute',
    resizeMode: 'contain',
    zIndex: 1,
  },
});
