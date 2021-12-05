import { createStyles, makeStyles, Theme } from "@material-ui/core";

const sidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    eventsPaper: {
      height: "58%",
      overflow: "auto",
      padding: "0 5px",
    },
    actionsPaper: {
      height: "15%",
      padding: "0 5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    descriptionContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    actionsContainer: {
      "& > *": {
        width: "100%",
        margin: '10px 0'
      },
    },
    infoContainer: {
      padding: "0 5px",
      height: "24%",
    },
  })
);

export default sidebarStyles;
