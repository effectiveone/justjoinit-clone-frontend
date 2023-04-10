import { TextField, MenuItem } from "@material-ui/core";

export const FormInput = ({
  label,
  value,
  handleChange,
  variant = "outlined",
  fullWidth = true,
  type = "text",
  select = false,
  options = [],
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      select={select}
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};
