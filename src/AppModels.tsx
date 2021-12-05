export interface IEventState {
  eventMessages: string[];
  removedLettersCount: number;
  lettersOnBottom: number;
  isPaused: boolean;
  isPauseBtnDisabled: boolean;
}

export interface IEventAction {
  type: string;
  payload: IEventActionPayload;
}

export interface IEventActionPayload {
  message: string;
  points: number;
}

export enum EEventActions {
  KEYDOWN_A = "KEYDOWN_A",
  KEYDOWN_B = "KEYDOWN_B",
  KEYDOWN_C = "KEYDOWN_C",
  KEYDOWN_D = "KEYDOWN_D",
  KEYDOWN_E = "KEYDOWN_E",
  KEYDOWN_INVALID = "KEYDOWN_INVALID",
  LETTER_HIT_BOTTOM = "LETTER_HIT_BOTTOM",
  MAX_BOTTOM_COUNT_REACHED = "MAX_BOTTOM_COUNT_REACHED",
  PAUSE_BUTTON_PRESSED = "PAUSE_BUTTON_PRESSED",
}

export enum EUserMessages {
  KEYDOWN_A = "User clicked 'A'.",
  KEYDOWN_B = "User clicked 'B'.",
  KEYDOWN_C = "User clicked 'C'.",
  KEYDOWN_D = "User clicked 'D'.",
  KEYDOWN_E = "User clicked 'E'.",
  KEYDOWN_INVALID = "User clicked invalid key! Nothing to add.",
  ADD_USER_POINTS = "User points increased with: ",
  LETTER_HITS_BOTTOM = "A letter felled to the bottom. Remaining count until end-game: ",
  MAX_BOTTOM_COUNT_REACHED = "Maximum count of letters on the floor reached. End game.",
  USER_PAUSED_GAME = "User paused the game.",
  USER_CONTINUED_GAME = "User continued the game.",
}
