// A custom interface for the field objects
interface Field {
  type: string;
  name: string;
  label: string;
  defaultValue?: string | string[];
  options?: { value: string; label: string }[];
  validation?: {
    required?: boolean | { value: boolean; message: string };
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: string) => boolean | string;
  };
}

// A custom interface for the InputField props
interface InputFieldProps extends Field {
  value: string | string[]; // The value prop is a string or an array of strings
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // The onChange prop is a function that takes a change event object as a parameter
  errors: Record<string, { message: string }>; // The errors prop is an object that contains the error messages for each field
}

// A custom interface for the GenericForm props
interface GenericFormProps {
  fields: Field[]; // The fields prop is an array of Field objects
  onSubmit: (values: Record<string, string | string[]>) => void; // The onSubmit prop is a function that takes an object of form values as a parameter
  submitText: string; // The submitText prop is a string that represents the text of the submit button
}

export type {Field, GenericFormProps, InputFieldProps};