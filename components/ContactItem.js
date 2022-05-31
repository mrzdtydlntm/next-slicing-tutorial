import classNames from "classnames";

function ContactItem({ label, value, icon, className }) {
  return (
    <div className={classNames(`flex items-start`, className)}>
      <img src={icon} className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default ContactItem;
