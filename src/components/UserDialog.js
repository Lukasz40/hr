import React from "react";
import {
  Dialog,
  DialogContent,
  Toolbar,
  Slide,
  makeStyles,
  AppBar,
  Typography,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserDialog = props => {
  const classes = useStyles();
  const { userDetails, open, handleClose } = props;
  //const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {userDetails ? (
        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h5" className={classes.title}>
                {userDetails.firstName} {userDetails.lastName} -{" "}
                <span>{userDetails.email}</span>
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <MaterialTable
                  title="Języki programowania"
                  columns={[
                    { title: "Języki programowania", field: "devLang" },
                    { title: "Doświadczenie w latach", field: "devExperience" },
                    { title: "Ostatnie użycie (rok)", field: "devLastUse" }
                  ]}
                  data={userDetails.devLangs}
                  options={{
                    search: false,
                    paging: false
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MaterialTable
                  title="Narzędzia"
                  columns={[
                    { title: "Narzędzia", field: "tool" },
                    {
                      title: "Doświadczenie w latach",
                      field: "toolExperience"
                    },
                    { title: "Ostatnie użycie (rok)", field: "toolLastUse" }
                  ]}
                  data={userDetails.tools}
                  options={{
                    search: false,
                    paging: false
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose}>
          <p>Upssss coś poszło nie tak</p>
        </Dialog>
      )}
    </>
  );
};

export default UserDialog;
