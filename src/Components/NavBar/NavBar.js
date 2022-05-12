import "./NavBar.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  helpIcon: {
    fontSize: "large",
  },
}));
export function NavBar(props) {
  const classes = useStyles();
  const { title, handleHelp } = props;

  const handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  };

  return (
    <>
      <div class="mainContent-nav">
        <div class="nav-middle">
          <div class="navbar-title">{title}</div>
        </div>

        <div class="navbar-leftcontent">
          <button onClick={(e) => handleHelp()} style={{ marginRight: "50px" }}>
            {" "}
            <HelpOutlineSharpIcon
              className={classes.helpIcon}
              fontSize="large"
            />{" "}
          </button>
          <button onClick={(e) => handleClose()}>
            {" "}
            <CancelOutlinedIcon fontSize="large" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}
