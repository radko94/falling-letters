import { createStyles, makeStyles, Theme } from "@material-ui/core";

const lettersFieldStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100%",
      position: "relative",
      padding: "0 20px",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 0,
      backgroundColor: theme.palette.background.paper,
    },
    box: {
      width: 50,
      height: 50,
      position: "absolute",
      animation: "forwards",
      animationName: "falling",
      animationIterationCount: "1",
      animationDuration: '10s',
      animationTimingFunction: "linear",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    horizontalLine: {
      position: "relative",
      top: "96vh",
    },
    "@global": {
      "@keyframes falling": {
        "0%": {
          top: "-10%",
        },
        "100%": {
          top: '90%',
        },
      },
    },
  })
);

export default lettersFieldStyles;
