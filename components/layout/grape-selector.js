export const GrapeSelector = ({ label, options, value, onChange }) => (
    <div>
      <label htmlFor={label}>{label}: </label>
      <select id={label} value={value} onChange={onChange}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.itemName}
          </option>
        ))}
      </select>
    </div>
  );