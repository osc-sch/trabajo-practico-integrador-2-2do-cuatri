import { useState } from "react";

export const useForm = (iniform) => {
    const [form, setForm] = useState(iniform)
    
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    };
    
    return{ handleChange,handleSubmit}
}