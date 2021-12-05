import React from "react";

import { Button, Paper } from "@material-ui/core";
import { ISidebarProps } from "./SidebarModels";
import sidebarStyles from "./SidebarStyles";
import {
  EEventActions,
  IEventActionPayload,
} from "../../AppModels";

const Sidebar = (props: ISidebarProps): JSX.Element => {
  const styles = sidebarStyles();

  const onPause = (): void => {
    props.eventDispatch({
      type: EEventActions.PAUSE_BUTTON_PRESSED,
      payload: {} as IEventActionPayload,
    });
  };

  return (
    <aside className={props.containerStyles}>
      <Paper className={styles.eventsPaper}>
        {props.eventState.eventMessages.map((x, i) => (
          <h4 key={i}>{x}</h4>
        ))}
      </Paper>
      <Paper className={styles.actionsPaper}>
        <section className={styles.descriptionContainer}>
          <h2>Score: {props.eventState.removedLettersCount}</h2>
          <h2>
            Level:{" "}
            {~~(props.eventState.removedLettersCount / 10)
              ? ~~(props.eventState.removedLettersCount / 10)
              : 1}
          </h2>
        </section>
        <section className={styles.actionsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={onPause}
            disabled={props.eventState.isPauseBtnDisabled}
          >
            {props.eventState.isPaused ? "Resume" : "Pause"}
          </Button>
        </section>
      </Paper>
      <Paper className={styles.infoContainer}>
        <h3>Info</h3>
        <ul>
          <li>Interaction: A, B, C, D, E keyboard buttons</li>
          <li>Every removed letter adds +1 to score</li>
          <li>Level increases on every 10 removed letters</li>
          <li>Remove letter - you need at least two of it</li>
          <li>Game ends when 20 letters hits the floor</li>
        </ul>
      </Paper>
    </aside>
  );
};

export default Sidebar;
