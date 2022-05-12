import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function ComboBoxChips(props) {
  const {
    options,
    defaultValue,
    keyOption = "label",
    limitTags = 3,
    onChange,
    label,
  } = props;
  console.table(props);
  const handleChange = (e, value, reason) => {
    /* console.log("e", e);
    console.log("value", value);
    console.log("reason", reason);
     */
    onChange?.(value);
  };
  return (
    <Autocomplete
      fullWidth
      multiple
      limitTags={limitTags}
      id="multiple-limit-tags"
      size="small"
      options={options || []}
      getOptionLabel={(option) => option[keyOption]}
      defaultValue={defaultValue || []}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label={label || ""}

          //  placeholder="Favorites"
        />
      )}
     
    />
  );
}
