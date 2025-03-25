export const Field = ({label, type, fieldValues, onChange}) => {
  return (
    <div key={label} className="flex flex-col">
      <label className="pl-1 my-2 text-slate-500" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-64 focus:outline-emerald-500 px-1 py-2 bg-slate-50 border rounded-lg border-slate-200"
        id={label}
        type={type}
        value={fieldValues[label]}
        onChange={onChange
        }
      />
    </div>
  )
}