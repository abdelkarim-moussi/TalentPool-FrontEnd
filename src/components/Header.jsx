import image from "../assets/head.png";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5 items-center px-5 mb-10 w-full sm:flex-col md:flex-row md:items-start sm:text-center md:text-start">
      <div className="flex-1 my-20">
        <h2 className="text-md">are you looking for your dream job ?</h2>
        <h1 className="text-[5rem] font-bold">TalentPoo is your <br/> solution</h1>
      </div>
      <div className="flex-1 sm:mt-20 md:mt:0">
        <img className="w-full max-h-[400px]" src={image} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
