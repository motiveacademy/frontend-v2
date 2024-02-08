"use client";


const AboutUs = () => {


  return (
    <section className="text-primary-green  lg:p-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-20 font-bold text-5xl">
            About Us 
        </div>
        <div className="pt-5 sm:pr-10 space-y-4">
            <div className="hover:shadow-xl shadow-md rounded-sm space-y-4 text-white p-5 w-full bg-primary-green">   
                <p className="text-xl font-bold ">Our Why</p>
                <p>
                MOTIVE ingin memberikan solusi kepada para pemuda muslim untuk dapat meraih potensi terbaiknya, terutama dalam ranah pengembangan diri dan ilmu-ilmu keislaman
                </p>
            </div>
            <div className="text-right hover:shadow-xl shadow-md rounded-sm space-y-4  p-5 w-full bg-white">   
            <p className="text-xl font-bold">Our How</p>
                <p>
                MOTIVE akan mewujudkannya dengan menghadirkan pembelajaran yang kompeherensif dan membuka ruang bagi pemuda muslim untuk belajar dan bertumbuh                </p>
            </div>
        </div> 
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-0 sm:px-10 py-5">
        <div className="rounded-sm shadow-xl text-center px-5 sm:px-24 flex flex-col  justify-center items-center space-y-4 text-white p-10  bg-[url('/bg/about/vision.svg')] bg-cover bg-center " >
            <p className="text-3xl font-bold text-primary-yellow">
            Our Vision
            </p>
            <p>
            Menjadi platform edukasi terbesar di Indonesia yang berfokus dalam mempersiapkan generasi pemuda Islam yang berkompeten dan ber-tsaqafah Islamiyah
            </p>
        </div>
        <div className="rounded-sm shadow-xl px-5 sm:px-20  flex flex-col justify-center items-center space-y-6 text-white p-10 bg-[url('/bg/about/mission.svg')] bg-cover bg-center " >
            <p className="text-3xl font-bold text-primary-yellow">
            Our Mission
            </p>
            <ol class="text-center space-y-2 font-reguler text-white">
                <li className="hover:text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-green bg-opacity-80" >Menyediakan berbagai skema pembelajaran yang menggabungkan antara keilmuan islam dengan keilmuan praktis</li>
                <li className="hover:text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-green bg-opacity-80">Memberikan pelayanan dan pengalaman terbaik pada pemuda Islam dalam menjalani proses pembelajaran dan pengembangan diri</li>
                <li className="hover:text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-green bg-opacity-80">Memberikan ruang bagi para pemuda Islam untuk berbagi ilmu, pengalaman, ide, dan gagasan</li>
                <li className="hover:text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-green bg-opacity-80">Memperluas penyebaran dampak dengan pemanfaatan media informasi yang kredibel dan informatif</li>
            </ol>
        </div>
    </div>
    </section>
  );
};

export default AboutUs;
