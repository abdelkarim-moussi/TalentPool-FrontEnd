export default function Search(){
    return <div className="w-full max-w-[400px] rounded-lg border-2 border-[#D9E0A4] grid grid-cols-3">
        <input className="col-span-2 h-full bg-transparent pl-4 outline-none border-none" type="search" placeholder="..search"/>
        <input className="col-span-1 bg-[#D9E0A4] my-1 py-1 rounded-lg mr-4" type="button" value="search"/>
    </div>
}
