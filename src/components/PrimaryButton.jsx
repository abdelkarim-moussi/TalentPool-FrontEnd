export default function PrimaryButton({ text ,extra}) {
  return (
    <a
      className={`px-4 py-0.5 bg-[#D9E0A4] rounded-md text-black text-center transition hover:bg-[#ABB17B] hover:text-white ${extra}`}
    >
      {text}

    </a>
  );
}
