import React, { useEffect, useState } from "react";

import { IActiveLetter, ILetterFieldProps } from "./LettersFieldModels";
import lettersFieldStyles from "./LettersFieldStyles";

import { Paper } from "@material-ui/core";
import {
  EEventActions,
  EUserMessages,
  IEventActionPayload,
} from "../../AppModels";

const LettersField = (props: ILetterFieldProps): JSX.Element => {
  const styles = lettersFieldStyles();

  const letters = "abcde";

  const [activeLetters, setActiveLetters] = useState<IActiveLetter[]>([]);
  const [intervalHandle, setIntervalHandle] = useState<NodeJS.Timeout>();

  const getRandomNumber = (expectedMin: number, expectedMax: number) =>
    Math.floor(Math.random() * (expectedMax - expectedMin)) + expectedMin;

  const handleAdd = (): void => {
    const index = getRandomNumber(0, 4);
    const letter = letters.charAt(index);
    const position = getRandomNumber(5, 95) + "%";
    const id = new Date().getTime();
    const height = getRandomNumber(50, 150) + "px";
    const width = getRandomNumber(50, 150) + "px";
    const animationTime = ((10 + props.level) / props.level).toFixed(1) + "s";

    const activeLetter: IActiveLetter = {
      id,
      letter,
      position,
      animationTime,
      height,
      width,
      isOnBottom: false,
    };

    setActiveLetters((activeLetters) => [...activeLetters, activeLetter]);
  };

  const removeLettersAndUpdateState = (
    keyPressed: string,
    eventType: string,
    eventPayload: string
  ) => {
    const searchResult = activeLetters.filter(
      (x) => x.letter === keyPressed && !x.isOnBottom
    );

    props.eventDispatch({
      type: eventType,
      payload: {
        message:
          eventPayload +
          ` ${searchResult.length >= 2 ? searchResult.length : 0}`,
        points: searchResult.length,
      },
    });

    if (searchResult.length >= 2)
      setActiveLetters((actLet) =>
        actLet.filter((x) => !searchResult.includes(x))
      );
  };

  const handleRemove = (inputKey: string): void => {
    switch (inputKey) {
      case "a":
        removeLettersAndUpdateState(
          inputKey,
          EEventActions.KEYDOWN_A,
          EUserMessages.KEYDOWN_A + EUserMessages.ADD_USER_POINTS
        );

        break;
      case "b":
        removeLettersAndUpdateState(
          inputKey,
          EEventActions.KEYDOWN_B,
          EUserMessages.KEYDOWN_B + EUserMessages.ADD_USER_POINTS
        );
        break;
      case "c":
        removeLettersAndUpdateState(
          inputKey,
          EEventActions.KEYDOWN_C,
          EUserMessages.KEYDOWN_C + EUserMessages.ADD_USER_POINTS
        );

        break;
      case "d":
        removeLettersAndUpdateState(
          inputKey,
          EEventActions.KEYDOWN_D,
          EUserMessages.KEYDOWN_D + EUserMessages.ADD_USER_POINTS
        );

        break;
      case "e":
        removeLettersAndUpdateState(
          inputKey,
          EEventActions.KEYDOWN_E,
          EUserMessages.KEYDOWN_E + EUserMessages.ADD_USER_POINTS
        );

        break;
      default:
        props.eventDispatch({
          type: EEventActions.KEYDOWN_INVALID,
          payload: {
            message: EUserMessages.KEYDOWN_INVALID,
          } as IEventActionPayload,
        });

        break;
    }
  };

  const handleLetterHitBottom = (element: IActiveLetter) => {
    element.isOnBottom = true;

    props.eventDispatch({
      type: EEventActions.LETTER_HIT_BOTTOM,
      payload: {} as IEventActionPayload,
    });
  };

  useEffect(() => {
    window.onkeydown = (event: KeyboardEvent) => handleRemove(event.key);
  }, [activeLetters]);

  useEffect(() => {
    if (intervalHandle) {
      clearInterval(intervalHandle);
      setIntervalHandle(undefined);
    }

    if (!props.isPaused) {
      setIntervalHandle(setInterval(handleAdd, Math.floor(1000 / props.level)));
    }
  }, [props.level, props.isPaused]);

  return (
    <main className={props.containerStyles}>
      <Paper elevation={4} className={styles.paper}>
        {activeLetters.map((element) => (
          <Paper
            key={element.id}
            elevation={5}
            className={styles.box}
            onAnimationEnd={() => handleLetterHitBottom(element)}
            style={{
              left: element.position,
              animationDuration: element.animationTime,
            }}
          >
            {element.letter}
          </Paper>
        ))}
        <hr className={styles.horizontalLine} />
      </Paper>
    </main>
  );
};

export default LettersField;
