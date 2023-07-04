type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};
export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
}
