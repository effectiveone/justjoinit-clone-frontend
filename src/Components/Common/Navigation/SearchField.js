import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { devIcons } from "../../../Utils/devIcons";
import { Typography, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(() => ({
  iconButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 10px",
  },
  icon: {
    marginBottom: 0,
    width: 20,
    height: 20,
    color: "white", // or any other default color you want
    borderRadius: "50%",
  },
}));

export const SearchField = ({
  isFocused,
  setIsFocused,
  searchOptions,
  setSearchOptions,
  getData,
}) => {
  const classes = useStyles();

  const handleLanguageClick = (languageName) => {
    setSearchOptions({
      ...searchOptions,
      query: languageName,
    });
    getData();
  };

  return (
    <>
      <Grid container alignItems="center" style={{ position: "relative" }}>
        <Grid item>
          <TextField
            placeholder={
              isFocused ? "Skill, company, or job title" : "Search jobs"
            }
            value={searchOptions?.query}
            onChange={(event) =>
              setSearchOptions({
                ...searchOptions,
                query: event.target.value,
              })
            }
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                getData();
              }
            }}
            InputProps={{
              startAdornment: (
                <>
                  {!isFocused && (
                    <>
                      <IconButton
                        onClick={() => getData()}
                        className={classes.iconButton}
                      >
                        <SearchIcon />
                      </IconButton>
                    </>
                  )}
                  {isFocused && (
                    <>
                      <IconButton
                        onClick={() => getData()}
                        className={classes.iconButton}
                      >
                        <ArrowBackIcon />
                      </IconButton>{" "}
                    </>
                  )}
                </>
              ),
              onFocus: () => setIsFocused(true),
              onBlur: () => setIsFocused(false),
              style: {
                height: "10px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(243, 246, 248)",
                border: "none",
                transition: isFocused && "all 300ms ease-in-out",
                boxShadow: "none",
                borderRadius: "20px",
                width: isFocused ? "820px" : "180px",
                marginRight: "20px",
                flex: 1,
              },
            }}
            variant="outlined"
          />
          {isFocused && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "820px",
                backgroundColor: "white",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                borderRadius: "5px",
                zIndex: 999,
                // padding: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {devIcons.map((language, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    padding: "0 50px",
                  }}
                >
                  <IconButton
                    onClick={() => handleLanguageClick(language.name)}
                    className={classes.iconButton}
                    style={{ backgroundColor: language.background }}
                  >
                    <i className={`${language.icon} ${classes.icon}`}></i>
                  </IconButton>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    style={{
                      marginLeft: "10px",
                      marginRight: "50px",
                      flexGrow: 1,
                    }}
                  >
                    {language.name}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};
