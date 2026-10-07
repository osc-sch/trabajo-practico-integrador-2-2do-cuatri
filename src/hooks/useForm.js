import { useState } from "react";

export const useForm = (initialForm) => {

  const [form, setForm] = useState(initialForm);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return { handleInputChange, form, handleReset };
};
