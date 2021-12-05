import React, { useReducer } from "react";
import LettersField from "./components/letters-field";
import Sidebar from "./components/sidebar";

import appStyles from "./AppStyles";
import { eventsReducer, initialEventState } from "./AppState";

const App = () => {
  const styles = appStyles();

  const [state, dispatch] = useReducer(eventsReducer, initialEventState);
  
  return (
    <main className={styles.mainContainer}>
      <Sidebar
        containerStyles={styles.sidebarContainer}
        eventState={state}
        eventDispatch={dispatch}
      />
      <LettersField
        isPaused={state.isPaused}
        level={
          ~~(state.removedLettersCount / 10)
            ? ~~(state.removedLettersCount / 10)
            : 1
        }
        containerStyles={styles.lettersContainer}
        eventDispatch={dispatch}
      />
    </main>
  );
};

export default App;
