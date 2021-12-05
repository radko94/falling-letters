import {
  EEventActions,
  EUserMessages,
  IEventAction,
  IEventState,
} from "./AppModels";

export const initialEventState: IEventState = {
  eventMessages: [],
  removedLettersCount: 0,
  lettersOnBottom: 0,
  isPaused: false,
  isPauseBtnDisabled: false,
};

export const eventsReducer = (
  state: IEventState,
  action: IEventAction
): IEventState => {
  switch (action.type) {
    case EEventActions.KEYDOWN_A:
    case EEventActions.KEYDOWN_B:
    case EEventActions.KEYDOWN_C:
    case EEventActions.KEYDOWN_D:
    case EEventActions.KEYDOWN_E:
      return {
        ...state,
        eventMessages: [...state.eventMessages, action.payload.message],
        removedLettersCount: state.removedLettersCount + action.payload.points,
      };
    case EEventActions.LETTER_HIT_BOTTOM:
      const maxBottomReached = state.lettersOnBottom >= 19;

      return {
        ...state,
        lettersOnBottom: state.lettersOnBottom + 1,
        eventMessages: [
          ...state.eventMessages,
          maxBottomReached
            ? EUserMessages.MAX_BOTTOM_COUNT_REACHED
            : EUserMessages.LETTER_HITS_BOTTOM +
              ` ${19 - state.lettersOnBottom}`,
        ],
        isPaused: maxBottomReached ? true : state.isPaused,
        isPauseBtnDisabled: maxBottomReached,
      };
    case EEventActions.PAUSE_BUTTON_PRESSED:
      return {
        ...state,
        isPaused: !state.isPaused,
        eventMessages: [
          ...state.eventMessages,
          state.isPaused
            ? EUserMessages.USER_CONTINUED_GAME
            : EUserMessages.USER_PAUSED_GAME,
        ],
      };
    default:
      return {
        ...state,
      };
  }
};
