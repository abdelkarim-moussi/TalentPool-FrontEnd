export default function SecondaryButton({ text,className, ...props }) {
  return (
    <a
      href=""
      className={`px-4 py-0.5 border border-[#D9E0A4] rounded-md text-black hover:bg-[#19485F] hover:text-white ${className}`}
      {...props}
    >
      {text}
    </a>
  );
}
