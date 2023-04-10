import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const label = props.label;
  const value = props.value;
  const onChange = props.onChange;
  const helperText = props.helperText;
  const error = props.error || null;
  const labelWidth = props.labelWidth || 70;
  const className = props.className;
  const onBlur = props.onBlur || null;

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl variant="outlined" error={error}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={onChange}
        labelWidth={labelWidth}
        className={className}
        onBlur={onBlur}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;
