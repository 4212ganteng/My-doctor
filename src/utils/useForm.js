import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    // Parameter for onchange(get value from name)
    (formName, formValue) => {
      // and set the state
      return setValues({ ...values, [formName]: formValue });
    },
  ];
};
