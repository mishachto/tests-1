import {
  Select as SelectMui,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { CustomSelectProps } from "@shared/types/select";
import { SelectWrapper, OptionIcon } from "./CustomSelect.styles";

export const Select = ({
  options,
  defaultValue,
  value,
  onChange,
}: CustomSelectProps) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange?.(e.target.value);
  };

  const selectedOption = options.find(
    (opt) => opt.value === (value ?? defaultValue),
  );

  return (
    <SelectWrapper>
      <SelectMui
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        renderValue={(val) => {
          const opt = options.find((o) => o.value === val) ?? selectedOption;
          return (
            <>
              {opt?.icon && <OptionIcon src={opt.icon} alt={opt.label} />}
              {opt?.label}
            </>
          );
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </SelectMui>
    </SelectWrapper>
  );
};
