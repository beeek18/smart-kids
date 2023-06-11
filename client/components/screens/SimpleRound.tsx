import { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { nextRound } from '../../features/redux/slices/game/gameSlice';
import ChoiceButton from '../ui/Buttons.tsx/ChoiceButton';
import QuestionText from '../ui/Text/QuestionText';
import { clearVotes } from '../../features/redux/slices/game/gameAction';

export default function SimpleRound({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);

  const { allPlayers, round, votes } = game;

  const [voteUser, setVoteUser] = useState(false);

  console.log(allPlayers, round, votes);

  // useEffect(() => {
  //   if (allPlayers.length === votes.length) {
  //     dispatch(nextRound());
  //     setVoteUser(false);
  //     dispatch(clearVotes());
  //   }
  // }, [votes]);

  // const handleVote = () => {
  //   setVoteUser(true);
  // };

  return (
    <>
      <View>
        <Button onPress={() => navigation.navigate('IntroTwoRound')} title="IntroRound" />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <QuestionText />
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={styles.buttonContainer}>
              <ChoiceButton />
              <View style={styles.buttonSeparator} />
              <ChoiceButton />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonSeparator: {
    width: 10,
  },
});
