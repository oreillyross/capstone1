import { useState } from "react";
import { Field } from "./Field";

type Field = {
  label: string;
  type: string;
};

type Fields = {
  fields: Field[];
  submitLabel: string;
};

export const AuthForm = ({ fields, submitLabel }: Fields) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState: { [key: string]: string } = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  console.log(fieldValues);
  return (
    <form className="bg-white p-4 border border-slate-300 rounded-lg m-4 ">
      {fields.map(({ label, type }) => (
        <Field
          key={label}
          label={label}
          type={type}
          fieldValues={fieldValues}
          onChange={(e) =>
            setFieldValues({ ...fieldValues, [label]: e.target.value })
          }
        />
      ))}
      <button className="bg-emerald-500 text-slate-50 py-2 w-full rounded-lg mt-2 ">
        {submitLabel}
      </button>
    </form>
  );
};
