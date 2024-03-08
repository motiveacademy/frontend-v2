"use client";


const AboutUs = () => {


  return (
    <section className="text-primary-green">
    <div className="grid grid-cols-1 ">
    <div className="bg-[url('/bg/about/vismis.svg')] bg-cover bg-no-repeat bg-center">
        <div className="pb-5 sm:pb-10 px-5 sm:px-48 text-center h-48 font-bold text-4xl sm:text-6xl flex flex-col justify-end text-primary-green ">
        <p>About Us</p>
        </div>
        <div className="pb-20 pt-12 px-5 lg:px-60 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
            <div className="bg-white shadow-lg h-max">
                <div className="px-8 text-center bg-primary-green justify-center col-span-1 py-4 font-bold text-xl sm:text-2xl flex items-center">
                <p className="text-primary-yellow">Our Why</p>
                </div>
                <div className="font-semibold p-5 sm:p-10 col-span-1 items-center justify-center text-center">
                    MOTIVE ingin memberikan solusi kepada para pemuda muslim untuk dapat meraih potensi terbaiknya, terutama dalam ranah pengembangan diri dan ilmu-ilmu keislaman
                </div>
            </div>
            <div className="bg-white shadow-lg sm:mt-36 ">
                <div className="px-10 pt-4 text-center bg-primary-yellow justify-center col-span-2 font-bold text-2xl flex items-center">
                <p className="text-primary-green">Our How</p>
                </div>
                <div className="font-semibold p-5 sm:p-10  col-span-2 items-center justify-center text-center">
                    MOTIVE akan mewujudkannya dengan menghadirkan pembelajaran yang kompeherensif dan membuka ruang bagi pemuda muslim untuk belajar dan bertumbuh.            </div>
                </div>
        </div>
    </div>
    
        <div className="pt-10 p-5 sm:p-20 text-center md:px-48 flex flex-col justify-center ">
            <div className="pb-10 sm:pb-20 px-10 sm:px-24">
                <p className="text-center text-4xl sm:text-6xl pb-10 font-bold ">
                Our Vision
                </p>
                <p className="font-semibold">
                    Menjadi platform edukasi terbesar di Indonesia yang berfokus dalam mempersiapkan generasi pemuda Islam yang berkompeten dan ber-tsaqafah Islamiyah
                </p>
            </div>
            <div>
                <p className="text-4xl sm:text-6xl pb-10 font-bold ">
                Our Mission
                </p>
                <div className="font-light grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0">
                <div>
                    <ol className="sm:px-10 text-left space-y-4 font-reguler">
                    <li className="flex justify-center  text-left items-center rounded-sm py-2 px-4 bg-primary-yellow  h-full lg:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-12 h-12 mr-4" src="/bg/about/misi-1.svg" alt="misi 1" >
                            </img>
                        </div>
                        
                        <div>
                        Menyediakan berbagai skema pembelajaran yang menggabungkan antara keilmuan islam dengan keilmuan praktis
                        </div>
                    </li>
                    <li className="flex justify-center items-center text-white rounded-sm py-2 px-4 bg-primary-green h-full lg:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-12 h-12 mr-4" src="/bg/about/misi-2.svg" alt="misi 2" >
                            </img>
                        </div>
                        Memberikan pelayanan dan pengalaman terbaik pada pemuda Islam dalam menjalani proses pembelajaran dan pengembangan diri</li>
                    </ol>
                </div>
                <div>
                    <ol className="sm:px-10 text-left space-y-4 font-reguler ">
                    <li className="flex justify-center items-center text-white rounded-sm py-2 px-4 bg-primary-green h-full lg:h-24">
                        <div className="mr-4 rounded-full bg-primary-green bg-opacity-10">
                            <img className="w-8 h-8 mr-4" src="/bg/about/misi-3.svg" alt="misi 3" >
                            </img>
                        </div>
                        Memberikan ruang bagi para pemuda Islam untuk berbagi ilmu, pengalaman, ide, dan gagasan</li>
                    <li className="flex justify-center items-center  rounded-sm py-2 px-4 bg-primary-yellow h-full lg:h-24">
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
