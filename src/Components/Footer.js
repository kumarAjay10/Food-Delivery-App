import { BiCopyright } from "react-icons/bi";
import { FaApple } from "react-icons/fa";


export const Footer = () => {
  return (
    <>
    <div className="bg-gray-400 h-48 pt-2 flex justify-between border-t-2 border-gray-100">
        
      <div className="flex flex-col ">
        <div className="mx-12 my-2 text-2xl text-black font-bold">About us </div>
        <p className="w-60 ml-12 font-bold">Delicious meals delivered to your door. Order now! Eat well, effortlessly.</p>
        <div className="flex ml-8 mt-1">
          <button className="mx-1">
            <a href="https://github.com/kumarAjay10" target="_blank">
              <img 
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt=""
                className="rounded-full w-8 m-4"
              />
            </a>

          </button>
          <button className="hover:shadow-white rounded-full  ">
            <a href="https://www.linkedin.com/in/ajay-kumar-319a0028b/" target="_blank"><img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="" className="h-11 -ml-1"/></a>
          </button>
        </div>
      </div>
      <div className="flex mt-14">
        <div className="flex justify-center mr-3">
<div>
<div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center cursor-pointer hover:bg-gray-800 transition ease-in-out">
<div className="mr-3">

<img className="w-[40px]"
 src="https://static-00.iconduck.com/assets.00/google-play-icon-2048x2048-487quz63.png"/>
</div>
<div>
    <div className="text-xs">GET IT ON</div>
    <div className="text-2xl font-semibold font-sans">Google Play</div>
</div>
</div>
</div>
        </div>
        <div className="flex justify-center mr-3">
<div>
<div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center cursor-pointer hover:bg-gray-800 transition ease-in-out">
<div className="mr-3">
<FaApple size={40} />
</div>
<div>
    <div className="text-xs">Download on the</div>
    <div className="text-2xl font-semibold font-sans">App Store</div>
</div>
</div>
</div>
        </div>
</div>
    </div>
    <div className="hidden md:flex bg-zinc-900 h-15  text-zinc-500 justify-center max-w-full">
      <div className="flex  ">
        <div className="flex mr-60 border-b-2 border-b-slate-600 hover:text-white hover:border-b-white">
      <p className="mt-[5]">BHOOKH LAGI HAI? </p>
        <BiCopyright className="h-9 ml-1 mr-1"/>  
        <p className="mt-[5]"> 2024 </p>
        </div>
        <div className="mt-[5] border-b-2 border-b-slate-600 hover:text-white hover:border-b-white">
        ajaykumar11141997@gmail.com
        </div>
        </div>
       
       
    </div>
    </>
  );
};
