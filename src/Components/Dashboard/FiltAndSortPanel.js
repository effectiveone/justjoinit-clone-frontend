import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useDashboardContext } from "../../Context/useDashboardContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  oneline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const FiltAndSortPanel = ({ onSortChange, onRemoteChange }) => {
  const { jobs } = useDashboardContext();
  const countJobs = jobs?.length;
  const classes = useStyles();
  const [sort, setSort] = useState("latest");
  const [remote, setRemote] = useState(false);

  const handleSortChange = (event) => {
    setSort(event.target.value);
    onSortChange(event.target.value);
  };

  const handleRemoteChange = (event) => {
    setRemote(event.target.checked);
    onRemoteChange(event.target.checked);
  };

  return (
    <div className={classes.oneline}>
      <div>Offers with Salary</div>
      <div>All Offers {countJobs} offers</div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Switch Remote</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={remote}
                onChange={handleRemoteChange}
                color="primary"
              />
            }
            label="Remote"
          />
        </FormGroup>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={sort} onChange={handleSortChange}>
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="highest">Highest Salary</MenuItem>
          <MenuItem value="lowest">Lowest Salary</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FiltAndSortPanel;
