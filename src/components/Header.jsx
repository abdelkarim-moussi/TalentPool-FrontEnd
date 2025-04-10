import image from "../assets/head.png";

const Header = () => {
  return (
    <div className="flex justify-between gap-5 items-center px-5 mb-10 w-full">
      <div className="flex-1">
        <h2 className="text-md">are you looking for your dream job ?</h2>
        <h1 className="text-[5rem] font-bold">TalentPoo is your <br/> solution</h1>
      </div>
      <div className="flex-1">
        <img className="w-full max-h-[400px]" src={image} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
