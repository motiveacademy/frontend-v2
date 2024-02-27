"use client";


const AboutUs = () => {


  return (
    <section className="text-primary-green p-10 lg:px-48">
    <div className="grid grid-cols-1  gap-4 px-8 ">
        <div className="shadow-xl py-20 px-36 font-bold text-5xl h-[250px]flex rounded-sm  text-left flex-col  space-y-4 text-primary-yellow  bg-[url('/bg/about/vision.svg')] bg-cover justify-center bg-no-repeat bg-center">
            <div className="rounded-md px-10 py-5 w-max bg-primary-green text-white bg-opacity-100">
                About Us  
            </div>   
        </div>
        <div class="px-5 grid grid-cols-3 hover:shadow-3xl shadow-lg rounded-sm">
            <div class="py-10 pl-10 col-span-1 font-bold text-4xl">
            Our Why
            </div>
            <div class="col-span-2 py-10 pr-10">
                MOTIVE ingin memberikan solusi kepada para pemuda muslim untuk dapat meraih potensi terbaiknya, terutama dalam ranah pengembangan diri dan ilmu-ilmu keislaman
            </div>
        </div>
        <div class="px-5 grid grid-cols-3 hover:shadow-3xl shadow-lg rounded-sm">
            <div class=" col-span-2 py-10 pl-10 text-right">
            MOTIVE akan mewujudkannya dengan menghadirkan pembelajaran yang kompeherensif dan membuka ruang bagi pemuda muslim untuk belajar dan bertumbuh 
            </div>
            <div class="text-right col-span-1 py-10 pr-10 font-bold text-4xl">
            Our How           </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
            <div className="p-10 grid grid-cols-1 text-center hover:shadow-3xl shadow-lg bg-primary-green">
            <p className="text-3xl font-bold text-primary-yellow">
                Our Vision
                </p>
                <p className="text-white">
                Menjadi platform edukasi terbesar di Indonesia yang berfokus dalam mempersiapkan generasi pemuda Islam yang berkompeten dan ber-tsaqafah Islamiyah
                </p>
            </div>
            <div className="p-10 grid grid-cols-1 text-center hover:shadow-3xl shadow-lg  bg-primary-green">
            <p className="text-3xl font-bold text-primary-yellow pb-8">
            Our Mission
            </p>
            <div class="grid grid-cols-2 gap-0">
            <div>
                <ol class="px-10 text-center space-y-2 font-reguler text-white">
                <li class="flex justify-center items-center text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-yellow  h-24">
                    <div>
                    Menyediakan berbagai skema pembelajaran yang menggabungkan antara keilmuan islam dengan keilmuan praktis
                    </div>
                </li>
                <li class="flex justify-center items-center text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-yellow  h-24">Memberikan pelayanan dan pengalaman terbaik pada pemuda Islam dalam menjalani proses pembelajaran dan pengembangan diri</li>
                </ol>
            </div>
            <div>
                <ol class="px-10 text-center space-y-2 font-reguler text-white">
                <li class="flex justify-center items-center text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-yellow h-24">Memberikan ruang bagi para pemuda Islam untuk berbagi ilmu, pengalaman, ide, dan gagasan</li>
                <li class="flex justify-center items-center text-black hover:bg-primary-yellow rounded-md py-2 px-4 bg-primary-yellow h-24">Memperluas penyebaran dampak dengan pemanfaatan media informasi yang kredibel dan informatif</li>
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
