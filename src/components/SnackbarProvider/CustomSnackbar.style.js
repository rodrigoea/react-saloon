import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import red from "@material-ui/core/colors/red";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";

export const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles = () => ({
  message: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    opacity: 0.9,
    marginRight: 10
  }
});

export const variantColors = {
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: red[500]
  },
  info: {
    backgroundColor: blueGrey[500]
  },
  warning: {
    backgroundColor: amber[700]
  }
};

export default styles;
