import type { TextboxType } from "@/app/types/components";

function TextboxInput({
  placeholder,
  value,
  type,
  name,
  onChange,
}: TextboxType) {
  return (
    <>
      <input
        className="flex-1 min-w-[46ch] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextboxInput;
