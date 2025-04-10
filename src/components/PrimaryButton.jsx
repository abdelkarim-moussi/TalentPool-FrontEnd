export default function PrimaryButton({ text , py = "py-1",height , width , text_transform , ...props}) {
  return (
    <a
    {...props}
      className={`px-4 bg-[#D9E0A4] rounded-md text-black text-center transition hover:bg-[#ABB17B] hover:text-white ${py} ${height} ${width} ${text_transform}`}
    >
      {text}

    </a>
  );
}
