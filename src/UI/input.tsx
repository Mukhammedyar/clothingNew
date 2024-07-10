interface InputProps {
    placeholder: string;
    onchange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string | number | undefined,
    className?: string | undefined;
  }

 const Input:React.FC<InputProps> = ({placeholder, onchange, value, className}) => {
  return (
    <input 
        placeholder={placeholder}
        onChange={onchange}
        value={value}
        type="text" 
        className={`bg-zinc-950 text-zinc-300 px-2 py-1 h-10 w-full text-sm focus:outline-none focus:ring-2 ring-zinc-700 rounded-md ${className}`} />
  )
}
export default Input

