import { createStyles, makeStyles, Theme } from "@material-ui/core";

const appStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: "flex",
      background: theme.palette.background.default,
    },
    sidebarContainer: {
      display: "flex",
      flexDirection: "column",
      flexBasis: "20%",
      justifyContent: 'space-between',
      height: "97vh",
      overflow: "hidden",
      padding: '10px'
    },
    lettersContainer: {
      display: "flex",
      flexBasis: "80%",
      height: "100vh",
    },
  })
);

export default appStyles;
