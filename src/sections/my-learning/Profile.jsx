"use client"
const Profile = async(user) => {
  if (user && user.user)  {
    var profile = user.user
    if (!profile.age) // tes
      console.log("tes")
  }
  
  return (
    <main className="min-h-screen">
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="text-center">
            
            <div className="relative">
              <div className="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

          </div>

          <div className="mt-5 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{profile.name}</h1>
            <p className="font-light text-gray-600 mt-3">{profile.email}</p>

          </div>
          <div className="justify-center px-20 py-5 grid gap-10 grid-cols-1 sm:grid-cols-2">
            <div className="h-max">
              <p className="pb-2 font-light">Umur</p>
              <div className="w-full h-full p-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
                {profile.age? 
                <p className="text-sm font-semibold">{profile.age}</p>:
                <p className="text-sm font-semibold">Belum ada data umur.</p>
                }
              </div> 
            </div>
            <div className="h-max">
              <p className="pb-2 font-light">Jenis Kelamin</p>
              <div className="w-full h-full py-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
                {profile.sex? 
                <p className="text-sm font-semibold">{profile.sex}</p>:
                <p className="text-sm font-semibold">Belum ada data jenis kelamin.</p>
                }
              </div> 
            </div>
            <div className="h-max">
              <p className="pb-2 font-light">Domisili</p>
              <div className="w-full h-full py-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
                {profile.domicile? 
                <p className="text-sm font-semibold">{profile.domicile}</p>:
                <p className="text-sm font-semibold">Belum ada data dommisili.</p>
                }
              </div> 
            </div>
            <div className="h-max">
              <p className="pb-2 font-light">Pekerjaan</p>
              <div className="w-full h-full py-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
                {profile.job? 
                <p className="text-sm font-semibold">{profile.job}</p>:
                <p className="text-sm font-semibold">Belum ada data pekerjaan.</p>
                }
              </div> 
            </div>
          </div>

        </div>
        </div>
    </main>
  );
};

export default Profile;
