interface DropdownProps {
  title: string;
  id: string;
}

interface DropdownOptionProps {
  setUpdateType: Function;
  updateType: string | undefined;
}

export function DropdownOption({ updateType, setUpdateType }: DropdownOptionProps) {
  const clickListener = (ev: MouseEvent) => {
    ev.preventDefault();
    if (!updateType) return;
    setUpdateType(updateType);
  };

  return (
    <div className="option" onClick={clickListener}>
      <p className="document-id"></p>
    </div>
  );
}

export function Dropdown({ title, id }: DropdownProps) {
  return (
    <div className="dropdown-menu" id={id}>
      <h3>{title}</h3>
      <div className="dropdown-options"></div>
    </div>
  );
}
