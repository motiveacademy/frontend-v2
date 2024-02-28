"use client";


const AboutUs = () => {


  return (
    <section className="">
    <div className="grid grid-cols-1 ">
    <div className="pb-10 text-center h-48 font-bold text-5xl flex flex-col justify-end text-white bg-[url('/bg/about/about-us.svg')] bg-cover bg-no-repeat bg-center">
        <p>About Us</p>
    </div>
        <div className="pt-10 px-24 grid grid-cols-1 sm:grid-cols-4">
            <div className="px-10 text-right bg-primary-green justify-end col-span-2 font-bold text-4xl flex items-center">
                <p className="text-primary-yellow">Our Why</p>
            </div>
            <div className="font-semibold px-24 p-20 col-span-2 items-center justify-start">
                MOTIVE ingin memberikan solusi kepada para pemuda muslim untuk dapat meraih potensi terbaiknya, terutama dalam ranah pengembangan diri dan ilmu-ilmu keislaman
            </div>
        </div>
        <div className="pb-10 px-20 grid grid-cols-1 sm:grid-cols-4">
            <div className="font-semibold px-24 p-20 col-span-2 items-center justify-start">
                MOTIVE akan mewujudkannya dengan menghadirkan pembelajaran yang kompeherensif dan membuka ruang bagi pemuda muslim untuk belajar dan bertumbuh.            </div>
            <div className="px-10 text-left bg-primary-yellow justify-start col-span-2 font-bold text-4xl flex items-center">
                <p className="text-primary-green">Our How</p>
            </div>
        </div>
        <div className=" text-black p-20 text-center px-48 font-bold flex flex-col justify-end  bg-[url('/bg/about/vismis.svg')] bg-cover bg-no-repeat bg-center">
            <div className="pb-10">
                <p className="text-4xl pb-10 font-bold ">
                Our Vision
                </p>
                <p className="">
                    Menjadi platform edukasi terbesar di Indonesia yang berfokus dalam mempersiapkan generasi pemuda Islam yang berkompeten dan ber-tsaqafah Islamiyah
                </p>
            </div>
            <div>
                <p className="text-4xl pb-10 font-bold ">
                Our Mission
                </p>
                <div className="font-light grid grid-cols-2 gap-0">
                <div>
                    <ol className="px-10 text-left space-y-2 font-reguler text-white">
                    <li className="flex justify-center  text-left items-center text-black rounded-sm bg-opacity-70 py-2 px-4 bg-primary-yellow  h-full sm:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-12 h-12 mr-4" src="/bg/about/misi-1.svg" alt="misi 1" >
                            </img>
                        </div>
                        
                        <div>
                        Menyediakan berbagai skema pembelajaran yang menggabungkan antara keilmuan islam dengan keilmuan praktis
                        </div>
                    </li>
                    <li className="flex justify-center items-center text-white rounded-sm bg-opacity-70 py-2 px-4 bg-primary-green h-full sm:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-12 h-12 mr-4" src="/bg/about/misi-2.svg" alt="misi 2" >
                            </img>
                        </div>
                        Memberikan pelayanan dan pengalaman terbaik pada pemuda Islam dalam menjalani proses pembelajaran dan pengembangan diri</li>
                    </ol>
                </div>
                <div>
                    <ol className="px-10 text-left space-y-2 font-reguler text-white">
                    <li className="flex justify-center items-center text-black rounded-sm bg-opacity-70 py-2 px-4 bg-primary-yellow h-full sm:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-8 h-8 mr-4" src="/bg/about/misi-3.svg" alt="misi 3" >
                            </img>
                        </div>
                        Memberikan ruang bagi para pemuda Islam untuk berbagi ilmu, pengalaman, ide, dan gagasan</li>
                    <li className="flex justify-center items-center text-white  rounded-sm bg-opacity-70 py-2 px-4 bg-primary-green h-full sm:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-10 h-10 mr-4" src="/bg/about/misi-4.svg" alt="misi 4" >
                            </img>
                        </div>
                        Memperluas penyebaran dampak dengan pemanfaatan media informasi yang kredibel dan informatif</li>
                    </ol>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default AboutUs;
