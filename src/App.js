import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import TextField from '@mui/material/TextField';
import { Fragment } from "react";
import { Input, MobileNav, Navbar } from "@material-tailwind/react";

import { OutlinedInput } from "@mui/material";

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [boxes, setBoxes] = useState(['', '', '', '']);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = 'abhi'; // jawaban yang benar
    if (inputValue.toLowerCase() === answer) {
      const newBoxes = answer.split('').map((char) => char.toUpperCase());
      setBoxes(newBoxes);
    }
    setInputValue('');
  };

  return (
    <div>
      <Navbar className="relative mx-auto max-w-screen py-2 px-4 border-4 h-32 rounded-none rounded-b-[176px] max-[600px]:rounded-b-[10px] max-[600px]:h-20 shadow-md border-cyan-400 box-border lg:px-8 lg:py-4" >
        <div className="relative left-[106px] max-[600px]:left-5 max-[600px]:bottom-2 mx-auto items-center justify-between font-extrabold text-3xl leading-9">
          <h1 className="title relative max-[600px]:w-[600px] max-[600px]:text-[18px] max-[400px]:top-2 max-[400px]:right-[28px] max-[400px]:w-[400px] max-[400px]:text-[11px] text-black">Ayo Mainkan Teka-Teki Silang yang Menyenangkan ini!</h1>
          <p className="relative left-28 top-3 font-normal font-medium text-base max-[600px]:text-[11px] max-[600px]:left-4 max-[600px]:top-0 max-[400px]:w-[400px] max-[400px]:text-[7px] max-[400px]:left-[-15px] max-[400px]:top-0 max-[400px]:font-bold text-black">Perhatikan soal soal tersebut dan tulis jawabannya di kolom bawah Jawabannya adalah.</p>
        </div>
        <MobileNav>
        </MobileNav>
      </Navbar>
      <div className="flex justify-between">
        <div>

          <p>1. Nama lain dari kata menang dalam permainan Mobile Legend adalah?<br /> <br />
            2. ..... Mata Sapi.<br /> <br />
            3. Benda bulat berputar yang terdapat dalam kendaraan adalah?<br /> <br />
            4. Makhluk asing disebut dengan?<br /> <br />
            5. Buah apa yang memiliki daging buah berwarna putih dan kulit yang berwarna merah atau hijau?<br /> <br />
            6. Buah apa yang bentuknya menyerupai apel, tetapi memiliki daging buah yang lebih halus dan butir buah yang lebih kecil?<br /> <br />
            7. Apa nama hewan karnivora yang memiliki bulu berwarna jingga kecokelatan dengan bercak hitam di seluruh tubuhnya?<br /> <br />
            8. Apa nama cairan bening dan tidak berwarna yang menjadi komponen utama dalam pembuatan minuman ringan, jus, dan teh manis?<br /> <br />
            9. Apa nama benda kecil berbentuk lurus dengan kepala dan badan yang tipis dan runcing di ujungnya, biasanya digunakan untuk menggantung atau menempel benda-benda ke dinding?<br /> <br />
            10. Apa nama benda atau zat yang biasanya digunakan untuk membunuh atau mengendalikan hama tanaman atau serangga yang merusak?<br /> <br />
          </p>
        </div>
        <div className="container pl-8 pt-4 pb-32 max-[1640px]:w-[684px] max-[600px]:w-[300px]">
          <div className="flex max-[600px]:mt-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="fixed bottom-0 left-0 right-0 z-10 border-4 h-32 bg-white rounded-none rounded-t-[176px] max-[600px]:rounded-t-[10px] max-[600px]:border-2 border-cyan-400 box-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="tems-center mt-5 max-[600px]:mt-8">
              <h1 className='title text-center max-[600px]:text-[12px]'>Jawabannya adalah</h1>
              <div className="mt-2">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Masukkan jawaban"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="border border-gray-400 rounded-md px-4 py-2 ml-2"
                  />
                  <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}