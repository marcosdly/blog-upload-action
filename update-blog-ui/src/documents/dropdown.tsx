interface DropdownProps {
  title: string;
  id: string;
}

export function Dropdown({ title, id }: DropdownProps) {
  return (
    <div className="dropdown-menu" id={id}>
      <h3>{title}</h3>
      <div className="dropdown-options"></div>
    </div>
  );
}
