import { useState } from "react";
import { Field } from "./Field";
import type {UserValues} from "types"

type Field = {
  label: string;
  type: string;
};

type Fields = {
  fields: Field[];
  submitLabel: string;
  onSubmit: (values: UserValues) => void;
};

export const AuthForm = ({ fields, submitLabel, onSubmit }: Fields) => {
  const [loading, setLoading] = useState(false)
  
  const [values, setValues] = useState(() => {
    const initialState: { [key: string]: string } = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true)
        await onSubmit(values)
        setLoading(false)
      }}
      className="bg-white p-4 border border-slate-300 rounded-lg m-4 "
    >
      {fields.map(({ label, type }) => (
        <Field
          key={label}
          label={label}
          type={type}
          fieldValues={values}
          onChange={(e) =>
            setValues({ ...values, [label]: e.target.value })
          }
        />
      ))}
      <button className="relative bg-emerald-500 text-slate-50 py-2 w-full rounded-lg mt-2 ">
        {submitLabel} 
        {
        loading &&  
        <div className="absolute flex top-0 right-4 items-center h-full">
          <i className="text-xl text-green-300 fa-solid fa-spinner-third animate-spin"/>
        </div>
        }
      </button>
    </form>
  );
};
