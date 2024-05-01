import React from 'react'
import Slider from "../../Components/Slider";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import bg_img from '../../Assets/BG_IMG.png';
import Search from '../../Components/Search';
import image1 from '../../Assets/B2B-pic2.jpg';
import Incentives from '../../Components/Incentives';




const Home = () => {

  const openloginpage = () => {
    console.log("Gharpe sooke aaaya karo")
  }
  return (
    <div>
      <Navbar />

      <div className='bg-[#f8edeb]'> 
      <div className="p-5 mt-auto">
      <Search />
        <div className="relative overflow-hidden">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-10xl font-bold tracking-tight text-black-900 sm:text-6xl">
                  Summer styles are finally <span className='text-yellow-400'>here</span>
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that doesnt care if you live or die.
                </p>
              </div>
              <div>
                <div className="mt-10">

                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 flex items-center">

                      <Slider /> 
                    </div>
                  </div>

                  <a href="#" className="inline-block rounded-md border border-transparent bg-yellow-500 px-8 py-3 text-center font-medium text-white hover:bg-yellow-300" >
                    Shop Collection
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Incentives />
        <Footer />
      </div>
    </div>
  )
}

export default Home