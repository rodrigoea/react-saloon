import { colors } from "@material-ui/core";

export default theme => ({
  adminName: {
    marginBottom: 100
  },
  actionRequired: {
    fontSize: 26
  },
  list: {
    marginTop: 40
  },
  applicantRow: {
    flexGrow: "1"
  },
  applicant: {
    width: 50,
    height: 50
  },
  approve: {
    color: colors.green[300]
  },
  reject: {
    color: colors.red[300]
  },
  pin: {
    marginTop: 10
  }
});
