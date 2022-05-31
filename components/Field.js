import classNames from "classnames";

function Field({ label, name, type, className }) {
  const formControlClassName = classNames(`bg-transparent border border-primaryGrey-300 py-2 px-6 w-full`, className);
  return (
    <div className="mb-6">
      <label className="block mb-1 text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      {type === "text" ? (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      ) : (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}

export default Field;
