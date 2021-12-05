import { IEventAction } from "../../AppModels";

export interface ILetterFieldProps {
  containerStyles: string;
  level: number;
  isPaused: boolean;
  eventDispatch: React.Dispatch<IEventAction>;
}

export interface IActiveLetter {
  id: number;
  letter: string;
  position: string;
  width: string;
  height: string;
  animationTime: string;
  isOnBottom: boolean;
}
