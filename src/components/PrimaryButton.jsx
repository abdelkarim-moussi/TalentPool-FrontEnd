export default function PrimaryButton({ text , py = "py-1",height , width }) {
  return (
    <a
      href=""
      className={`px-4 bg-[#D9E0A4] rounded-md text-black text-center hover:bg-[#ABB17B] hover:text-white ${py} ${height} ${width} `}
    >
      {text}
    </a>
  );
}
