"use client";

import DefaultButton from "@/commons/components/button";
import { useAuthContext } from "@/commons/contexts/auth";
import { signOut } from "@/commons/services/logout";
import { hardRedirect } from "@/commons/services/redirect";
import { useState } from "react";
import SuspenseImage from "@/commons/components/suspense-image";

const Profile = ({user, courses}) => {
  const [activeTab, setActiveTab] = useState('profile');
  const profile = user
 
  
  const { setAuth } = useAuthContext();
  const signOutHandler = () => {
    setAuth({
      isAuth: false,
      uid: null,
    });
    signOut();
    hardRedirect("/");
  };

  function showSection(sectionId) {
    setActiveTab(sectionId);
  }
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-16 space-y-8">
      
      <div className="p-8 bg-white shadow mt-24">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full p-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center pb-12">
          <h1 className="text-4xl font-medium text-gray-700">{profile.name}</h1>
          <p className="font-light text-gray-600 mt-3">{profile.email}</p>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 ">
          <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                  <a href="#" className={`inline-block p-4 text-gray-600  rounded-t-lg ${activeTab === 'profile' ? 'active text-blue-500 border-b-2 border-blue-500' : ''}`} active="true" onClick={showSection.bind(null, 'profile')} >Profile</a>
              </li>
              <li className="me-2">
                  <a href="#" className={`inline-block p-4 text-gray-600 rounded-t-lg ${activeTab === 'products' ? 'active text-blue-500 border-b-2 border-blue-500' : ''}`} onClick={showSection.bind(null, 'products')}>My Products</a>
              </li>
          </ul>
      </div>

        




        <div id="profile"  className={`${activeTab === 'profile' ? '' : 'hidden'} justify-center lg:px-20 py-5 gap-10 grid-cols-1 sm:grid-cols-2`}>
          <div className="h-max">
            <p className="pb-2 font-light">Umur</p>
            <div className="w-full h-full p-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
              {profile.age ? (
                <p className="text-sm font-semibold">{profile.age}</p>
              ) : (
                <p className="text-sm font-semibold">Belum ada data umur.</p>
              )}
            </div>
          </div>
          <div className="h-max">
            <p className="pb-2 font-light">Jenis Kelamin</p>
            <div className="w-full h-full py-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
              {profile.sex ? (
                <p className="text-sm font-semibold">{profile.sex}</p>
              ) : (
                <p className="text-sm font-semibold">
                  Belum ada data jenis kelamin.
                </p>
              )}
            </div>
          </div>
          <div className="h-max">
            <p className="pb-2 font-light">Domisili</p>
            <div className="w-full h-full py-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
              {profile.domicile ? (
                <p className="text-sm font-semibold">{profile.domicile}</p>
              ) : (
                <p className="text-sm font-semibold">
                  Belum ada data dommisili.
                </p>
              )}
            </div>
          </div>
          <div className="h-max">
            <p className="pb-2 font-light">Pekerjaan</p>
            <div className="w-full h-full py-2 px-5 rounded-sm bg-primary-yellow bg-opacity-20  font-light">
              {profile.job ? (
                <p className="text-sm font-semibold">{profile.job}</p>
              ) : (
                <p className="text-sm font-semibold">
                  Belum ada data pekerjaan.
                </p>
              )}
            </div>
          </div>
        </div>

        <div id="products" className={`${activeTab === 'products' ? '' : 'hidden'} items-center text-center justify-center lg:px-20 py-5 `}>
        {courses && courses.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2" style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
            {courses.map((course, index) => (
              <li key={index} className="flex-1">
                <a href={`/course/${course.id}`} > 
                <div className="flex flex-col p-4 h-full shadow-md shadow-slate-300 rounded">
                  <div>
                    <SuspenseImage src={`course/${course.pid}/cover.png`} />
                  </div>

                  <p className="text-md lg:text-xl text-primary-green font-bold">{course.name}</p>
                  <div className="space-y-4 pt-2">
                    <p className="text-sm md:text-md max-w-prose">
                      {course.description?.substring(0, course.description?.indexOf('.') + 1)}
                    </p>
                  </div>
                </div>
                </a>

              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm font-semibold">Belum ada produk yang tersedia.</p>
        )}

        </div>
      </div>


      
      <div className="flex justify-center">
        <DefaultButton type="outlined" onClick={signOutHandler}>
          Logout
        </DefaultButton>
      </div>

    </main>
  );
};

export default Profile;
