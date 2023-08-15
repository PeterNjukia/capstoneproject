import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { FormHelperText } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomTextField = ({
  name,
  label,
  error,
  formikRef = null,
  minWidth,
  disabled,
  ...rest
}) => {
  const checkError = () => {
    return formikRef?.touched[name] && Boolean(formikRef?.errors[name]);
  };

  return (
    <Box>
      <FormControl
        sx={{
          marginBottom: { xs: 1, sm: 2 },
          minWidth: { xs: 350, md: minWidth ? minWidth : 266 },
        }}
        variant="outlined"
        fullWidth
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          error={checkError()}
          {...rest}
          label={label}
          disabled={disabled}
        />
        {checkError() && (
          <FormHelperText error>{formikRef?.errors[name]}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

CustomTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  formikRef: PropTypes.any,
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CustomTextField;
