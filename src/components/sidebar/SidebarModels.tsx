import { IEventAction, IEventState } from "../../AppModels";

export interface ISidebarProps {
  containerStyles: string;
  eventState: IEventState;
  eventDispatch: React.Dispatch<IEventAction>;
}
