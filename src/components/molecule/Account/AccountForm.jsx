// TabbedInterface.js

import React, { useState } from 'react';
import FB from '/account/facebook-svgrepo-com.png'
import QrButton from '../../Atoms/Account/QrButton';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id='account-form' className="mi-layout__card container px-[50px] py-8 border mx-auto mt-[-50px]">
      <QrButton/>
      <ul className="flex">
        <li
          onClick={() => handleTabClick('login')}
          className={`cursor-pointer px-4 py-2 ${
            activeTab === 'login' ? ' text-black' : 'text-gray-300'
          }`}
        >
          
          Masuk
          
        </li>
        <li
          onClick={() => handleTabClick('register')}
          className={`cursor-pointer px-4 py-2 ${
            activeTab === 'register' ? 'text-black' : 'text-gray-300'
          }`}
        >
          Daftar
        </li>
      </ul>

      <div>
        {activeTab === 'login' && (
          <div>
            {/* Login form */}
            <form>
              <div className='flex flex-col space-y-5'>
                    <input type="email" placeholder="Email"
                        className="border w-full h-[30px] mt-[10px] mb-[10px] py-[30px] px-[20px] text-[#999]" />
                    <input type="password" placeholder="Password"
                        className="border w-full h-[30px] mt-[10px] mb-[10px] py-[30px] px-[20px] text-[#999]" /></div>
                        <div className='mt-4 flex flex-col space-y-4'>
                    <button type="submit"
                        className="disabled w-full text-center p-4 bg-[#ff5c00] text-white">Masuk</button>
                    <button id="google-button" type="submit"
                        className="border w-full text-center flex items-center bg-[#ffffff] text-white">
                        <span className="google-btn__icon bg-white h-full w-[70px] flex items-center justify-center"><svg className="h-auto w-[30px]" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" aria-label="google"><g fill-rule="nonzero" fill="none"><path d="M9.577 23.156c0-1.504.253-2.946.702-4.299L2.4 12.9A22.958 22.958 0 000 23.156c0 3.686.863 7.162 2.397 10.25l7.875-5.97a13.57 13.57 0 01-.695-4.28" fill="#FBBC05"></path><path d="M23.415 9.476a13.627 13.627 0 018.62 3.05l6.81-6.735c-4.15-3.576-9.47-5.788-15.43-5.788C14.162.003 6.209 5.243 2.4 12.9l7.883 5.959c1.815-5.458 6.99-9.383 13.133-9.383" fill="#EA4335"></path><path d="M23.515 36.532c-6.176 0-11.376-3.9-13.202-9.324L2.395 33.13c3.826 7.609 11.82 12.814 21.12 12.814 5.738 0 11.216-1.994 15.33-5.734l-7.517-5.69c-2.12 1.308-4.791 2.013-7.814 2.013" fill="#34A853"></path><path d="M45.975 22.938c0-1.36-.215-2.824-.535-4.184H23.513v8.89h12.62c-.629 3.031-2.346 5.361-4.804 6.877l7.516 5.69c4.32-3.925 7.13-9.773 7.13-17.273" fill="#4285F4"></path></g></svg></span>
                        <span className=" py-4 text-black  text-center justify-center items-center flex w-full">Masuk dengan
                        Google</span>
                        </button></div>
                    
                    <a className="block" href="">Lupa Sandi?</a>

                    <div>
                        <div className="text-center text-[17px] leading-[40px]">Pilihan lainnya</div>
                        <div className="m-[10px] flex justify-center"><img className="w-[70px] h-[70px] "
                                src={FB} alt=""/></div>
                    </div>
                </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div>
            {/* Registration form goes here */}
            <form>
                    <input type="email" placeholder="Email"
                        className="border w-full h-[30px] mt-[10px] py-[30px] px-[20px] text-[#999]"/>
                    <input type="password" placeholder="Sandi"
                        className="border w-full h-[30px] mt-[10px] py-[30px] px-[20px] text-[#999]"/>
                    <input type="password" placeholder="Masukan sandi Anda lagi"
                        className="border w-full h-[30px] mt-[10px] py-[30px] px-[20px] text-[#999]"/>
                    <p className="text-[13px] text-[#333] leading-tight">Sandi harus terdiri dari 8-16 karakter dan
                        mencakup angka dan huruf</p>
                    <button type="submit" className="w-full text-center p-4 bg-[#ff5c00] text-white">Berikutnya</button>
                </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;
