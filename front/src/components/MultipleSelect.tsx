
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

interface IMultiSelectProps {
  label: string;
  names: string[];
  onClose: (selected: string[]) => void;
}

export function MultipleSelect({ label, names, onClose }: IMultiSelectProps) {
  const [personName, setPersonName] = useState<string[]>([]);
  const [selectLabel, setSelectLabel] = useState("Select All");

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    let newValue = value;
    if (value.indexOf("Select All") >= 0) {
      newValue = names;
      setSelectLabel("Unselect All");
    }
    if (value.indexOf("Unselect All") >= 0) {
      newValue = [];
      setSelectLabel("Select All");
    }
    setPersonName(
      // On autofill we get a stringified value.
      typeof newValue === 'string' ? newValue.split(',') : newValue,
    );
  };

  const handleClose = () => {
    onClose(personName);
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    autoFocus: false,
    slotProps: {
      paper: {
        style: {
          maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      }
    },
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          multiple
          value={personName}
          onChange={handleChange}
          onClose={handleClose}
          label={label}
          renderValue={(selected) => selected.length === 0 ? `Select ${label}` : selected.length + " selected"}
          MenuProps={MenuProps}>
          <MenuItem value={selectLabel}>
            <em>{selectLabel}</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}