
function NavBar(){

    return ( 
    <nav className="flex justify-between bg-[#19485F] py-5 px-3 lg:px-5 rounded-lg shadow-lg max-w-[1000px] mx-auto mt-2">
        <a href="" className="text-white">TalentPool</a>
        <ul className="flex items-center text-white">
            <li className="mr-4 text-sm capitalize hover:"><a href="">JobAds</a></li>
            <li className="mr-4 text-sm capitalize hover:"><a href="">login</a></li>
            <li className="mr text-sm capitalize hover:"><a href="">sign up</a></li>
        </ul>
    </nav>
    )
}


export default NavBar;