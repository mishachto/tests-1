export type SelectOption = {
  value: string;
  label: string;
  icon?: string;
};

export type CustomSelectProps = {
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
};
