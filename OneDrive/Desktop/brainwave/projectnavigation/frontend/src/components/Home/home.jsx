import React from "react";
import Footer from "./footer";
import Header from "./header";
import Promotion from "./Promotion";
import Category from "./Category";
import NewCategory from "./NewCategory"
import Newhome from "./Newhome"
import MuseumCard from "./Museum-Card";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
const MuseumHomepage = () => {
  return (
    <div /*className="font-sans bg-[#F4F2F2]"*/>
      {/* <Header /> */}
      {/* Navigation Tabs (Desktop) */}
      <nav className="hidden md:flex border border-solid border-[#0000000f] bg-white w-full justify-center">
        <div className="flex w-4/5 gap-10 text-sm font-bold h-full">
          <a
            href="#"
            className="text-[#1A89DB] border-t-2 border-solid p-4 border-white hover:border-black box-border"
          >
            Home
          </a>
          {/* <a
            href="#"
            className="border-t-2 border-solid p-4 border-white hover:border-black box-border"
          >
            Popular
          </a> */}
          {/* <a
            href="#"
            className="border-t-2 border-solid p-4 border-white hover:border-black box-border"
          >
            Offers
          </a> */}
          <a
            href="/bot"
            className="border-t-2 border-solid p-4 border-white hover:border-black box-border"
          >
            ChatBot
          </a>
          <a
            href="/booking"
            className="border-t-2 border-solid p-4 border-white hover:border-black box-border"
          >
            Virtual Tour
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main  >
        {/* <Promotion /> */}
       <Newhome/>
        {/* <Category /> */}
        <NewCategory/>
        {/* Museums Around You */}
        <section className="sm:m-4">
          <h2 className="text-3xl font-extrabold mb-2">Get to know the best itinerary around you</h2>
          <div className="flex items-center max-md:flex-wrap max-sm:flex-col max-[500px]:flex-nowrap">
            <MuseumCard imageSrc={image1} caption='asdf' mp1='Amber Fort (9:00 AM)' mp2= 'Panna Meena ka Kund (11:30 AM)' mp3='Jaigarh Fort (12:30 PM)' ep1 = 'Hawa Mahal (5:30 PM)' ep2 ='Dinner at a Traditional Rajasthani Restaurant' ep3 ='Dinner at a Traditional Rajasthani Restaurant' />
            <MuseumCard imageSrc={image2} caption='asdf'  mp1='Amber Fort (9:00 AM)' mp2= 'Panna Meena ka Kund (11:30 AM)' mp3='Jaigarh Fort (12:30 PM)' ep1 = 'Hawa Mahal (5:30 PM)' ep2 ='Dinner at a Traditional Rajasthani Restaurant' ep3 ='Dinner at a Traditional Rajasthani Restaurant'/>
            <MuseumCard imageSrc={image3} caption='asdf'  mp1='Amber Fort (9:00 AM)' mp2= 'Panna Meena ka Kund (11:30 AM)' mp3='Jaigarh Fort (12:30 PM)' ep1 = 'Hawa Mahal (5:30 PM)' ep2 ='Dinner at a Traditional Rajasthani Restaurant' ep3 ='Dinner at a Traditional Rajasthani Restaurant'/>
            <MuseumCard imageSrc={image4} caption='asdf'  mp1='Amber Fort (9:00 AM)' mp2= 'Panna Meena ka Kund (11:30 AM)' mp3='Jaigarh Fort (12:30 PM)' ep1 = 'Hawa Mahal (5:30 PM)' ep2 ='Dinner at a Traditional Rajasthani Restaurant' ep3 ='Dinner at a Traditional Rajasthani Restaurant' />
          </div>
          {/* <div className="flex items-center max-md:flex-wrap max-sm:flex-col max-[500px]:flex-nowrap">
            <MuseumCard imageSrc={image1} caption='asdf' />
            <MuseumCard imageSrc={image2} caption='asdf' />
            <MuseumCard imageSrc={image3} caption='asdf' />
            <MuseumCard imageSrc={image4} caption='asdf' />
          </div> */}
        </section>
        
        {/* Family Discount (Desktop) */}
        {/* <section className="hidden md:flex  justify-center">
          <div className="w-5/6 min-h-[50vh] bg-gradient-to-r to-[#C58321] from-[#A85F09] p-4 rounded-3xl flex justify-center">
            <div className="w-3/5 flex flex-col justify-between p-10">
              <h2 className="text-4xl text-white font-bold mb-2 text-wrap">
                <span className="text-[#082C4D]">30% off:</span> On visit with
                family
              </h2>
             
              <div className="">
                <p className="text-white text-base">
                  Use Code AYUSH on 4 or more tickets
                </p>
                <button className="bg-white px-6 py-2 rounded-full mt-2 text-[#082C4D] font-bold text-xl hover:shadow-md">
                  Code: Ayush
                </button>
              </div>
            </div>
            <div className="bg-contain bg-no-repeat bg-[url('Family.png')] bg-center w-2/5 h-full"></div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default MuseumHomepage;
