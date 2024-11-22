import React, { useState, useRef } from 'react';
import { rightbarGetStatus } from '../../../reducers/actions';

export default function MyProfile() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const img = new Image();
            img.onload = () => {

                if (img.width < 150 || img.height < 150) {
                    setError("Resim boyutu 150px küçük!");
                    setImage(null);
                } else {
                    setError("");
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setImage(reader.result);
                    };
                    reader.readAsDataURL(file);
                }
            };
            img.src = URL.createObjectURL(file);
        }
    };

    const handleRightbarToggle = () => {
        rightbarGetStatus()
        // console.log("tıklandı");

    }

    return (
        <div className="p-3 flex justify-center items-center flex-col gap-10">

            <div className='w-full flex justify-end'>

                <button
                    type='button'
                    onClick={handleRightbarToggle}
                >
                    Tıkla
                </button>

            </div>

            <div className="flex flex-col items-center justify-center gap-9">
                <div className='flex justify-center items-center flex-col'>
                    <div
                        className="h-32 w-32 text-[#d0cccc] text-[15px] font-medium border border-[#ffffff27] p-1 rounded-full flex items-center justify-center shadow-custom hover:bg-white hover:bg-opacity-5 cursor-pointer"
                        onClick={handleClick}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt="Selected"
                                className="h-full w-full object-cover rounded-full"
                            />
                        ) : (
                            "Resim Seç"
                        )}
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />

                    {error && (
                        <div className="mt-3 text-[#9b2323] text-[15px] font-medium">
                            <p>{error}</p>
                        </div>
                    )}
                </div>




                <div>
                    <input type="text" placeholder="Adınızı Giriniz" className="w-[21.875rem] h-[2.5rem] rounded-xl p-2 outline-none bg-[#2d2b30] border border-[#ffffff27] text-[#d0cccc] shadow-custom focus:border-b-2 text-[15px] font-medium transition-all" />
                </div>

                <div>
                    <input type="text" placeholder="Soyadınızı Giriniz" className="w-[21.875rem] h-[2.5rem] rounded-xl p-2 outline-none bg-[#2d2b30] border border-[#ffffff27] text-[#d0cccc] shadow-custom focus:border-b-2 text-[15px] font-medium transition-all" />
                </div>

                <div>
                    <input type="text" placeholder="E-Mail Adresinizi Giriniz" className="w-[21.875rem] h-[2.5rem] rounded-xl p-2 outline-none bg-[#2d2b30] border border-[#ffffff27] text-[#d0cccc] shadow-custom focus:border-b-2 text-[15px] font-medium transition-all" />
                </div>

                <div>
                    <input type="text" placeholder="05*********" className="w-[21.875rem] h-[2.5rem] rounded-xl p-2 outline-none bg-[#2d2b30] border border-[#ffffff27] text-[#d0cccc] shadow-custom focus:border-b-2 text-[15px] font-medium transition-all" />
                </div>

                <div className="w-full">
                    <textarea placeholder="Bio Giriniz" className="w-full resize-none md:w-[28.125rem] h-[9.375rem] md:h-[10rem] rounded-xl p-2 outline-none bg-[#2d2b30] border border-[#ffffff27] text-[#d0cccc] shadow-custom focus:border-b-2 text-[15px] font-medium transition-all " ></textarea>
                </div>


            </div>

            <div className='w-full flex justify-end lg:mr-[52%]'>
                <button className='bg-[#2380267e] w-[180px] h-[35px] rounded-lg text-white hover:bg-[#23802691]'>Kaydet</button>
            </div>
        </div>
    )
}