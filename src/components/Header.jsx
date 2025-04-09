import image from "../assets/head.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 mb-10">
      <div>
        <h2 className="text-md">are you looking for your dream job ?</h2>
        <h1 className="text-[5rem] font-bold">TalentPoo is your <br/> solution</h1>
      </div>
      <div>
        <img className="w-full max-h-[400px]" src={image} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
