import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Typewriter from "typewriter-effect";
import TextField from '@mui/material/TextField';
import { Fragment } from "react";
import { Input, MobileNav, Navbar } from "@material-tailwind/react";

import { OutlinedInput } from "@mui/material";

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [boxes, setBoxes] = useState(['', '', '', '', '', '', '']);
  const [boxes2, setBoxes2] = useState(['', '', '', '', '']);
  const [boxes3, setBoxes3] = useState(['', '', '', '']);
  const [boxes4, setBoxes4] = useState(['', '', '', '', '']);
  const [boxes5, setBoxes5] = useState(['', '', '', '']);
  const [boxes6, setBoxes6] = useState(['', '', '']);
  const [boxes7, setBoxes7] = useState(['', '', '', '', '']);
  const [boxes8, setBoxes8] = useState(['', '', '']);
  const [boxes9, setBoxes9] = useState(['', '', '', '']);
  const [boxes10, setBoxes10] = useState(['', '', '', '', '']);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = 'victory'; // jawaban yang benar
    const answer2 = 'telur'; // jawaban yang benar
    const answer3 = 'roda'; // jawaban yang benar
    const answer4 = 'alien'; // jawaban yang benar
    const answer5 = 'apel'; // jawaban yang benar
    const answer6 = 'pir'; // jawaban yang benar
    const answer7 = 'macan'; // jawaban yang benar
    const answer8 = 'air'; // jawaban yang benar
    const answer9 = 'paku'; // jawaban yang benar
    const answer10 = 'racun'; // jawaban yang benar

    const trimmedInputValue = inputValue.trim(); // trim whitespace pada input

    if (trimmedInputValue.toLowerCase() === answer) {
      const jawaban = answer.toUpperCase().split('');
      setBoxes(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer2) {
      const jawaban = answer2.toUpperCase().split('');
      setBoxes2(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer3) {
      const jawaban = answer3.toUpperCase().split('');
      setBoxes3(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer4) {
      const jawaban = answer4.toUpperCase().split('');
      setBoxes4(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer5) {
      const jawaban = answer5.toUpperCase().split('');
      setBoxes5(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer6) {
      const jawaban = answer6.toUpperCase().split('');
      setBoxes6(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer7) {
      const jawaban = answer7.toUpperCase().split('');
      setBoxes7(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer8) {
      const jawaban = answer8.toUpperCase().split('');
      setBoxes8(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer9) {
      const jawaban = answer9.toUpperCase().split('');
      setBoxes9(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer10) {
      const jawaban = answer10.toUpperCase().split('');
      setBoxes10(jawaban);
    }
    setInputValue('');

    if (inputValue === answer) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer2) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer3) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer4) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer5) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer6) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer7) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer8) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer9) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
    if (inputValue === answer10) {
      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pesan',
        text: 'Nilai input adalah tertentu!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
  }

  return (
    <div>
      <Navbar className="relative mx-auto max-w-screen py-2 px-4 border-4 h-32 rounded-none rounded-b-[176px] max-[600px]:rounded-b-[10px] max-[600px]:h-20 shadow-md border-cyan-400 box-border lg:px-8 lg:py-4" >
        <div className="relative left-[106px] max-[600px]:left-5 max-[600px]:bottom-2 mx-auto items-center justify-between font-extrabold text-3xl leading-9">
          <h1 className="title relative max-[600px]:w-[600px] max-[600px]:text-[18px] max-[400px]:top-2 max-[400px]:w-[400px] max-[400px]:text-[12px] text-black">Ayo Mainkan Teka-Teki Silang yang Menyenangkan ini!</h1>
          <p className="relative left-28 top-3 font-normal font-medium text-base max-[600px]:text-[11px] max-[600px]:left-4 max-[600px]:top-0 max-[400px]:w-[400px] max-[400px]:text-[8px] max-[400px]:left-[8px] max-[400px]:top-0 max-[400px]:font-bold text-black">Perhatikan soal soal tersebut dan tulis jawabannya di kolom bawah Jawabannya adalah.</p>
        </div>
        <MobileNav>
        </MobileNav>
      </Navbar>
      <div className="max-[2660px]:flex max-[600px]:flex-wrap-reverse">
        <div className="w-[600px] max-[600px]:w-[350px] max-[600px]:ml-6 max-[600px]:mt-[-20px] ml-20 mt-10 pb-40">
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
        <div className="container pl-10 pt-7 pb-32 max-[600px]:mt-2 max-[1640px]:w-[684px] max-[600px]:w-[300px]">
          <div className="flex max-[600px]:mt-10">
            <div className="flex mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">1</span>
            </div>
            {boxes.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-260px] max-[600px]:ml-[-27px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">2</span>
            </div>
            {boxes2.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-380px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">3</span>
            </div>
            {boxes3.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-5 ml-[-260px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">4</span>
            </div>
            {boxes4.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">5</span>
            </div>
            {boxes5.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-180px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">6</span>
            </div>
            {boxes6.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-5 ml-[-180px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">7</span>
            </div>
            {boxes7.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">8</span>
            </div>
            {boxes8.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">9</span>
            </div>
            {boxes9.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[40px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">10</span>
            </div>
            {boxes10.map((box, index) => (
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
                    className="border-2 rounded-md max-[600px]:w-[120px] max-[600px]:h-[30px] px-4 py-2 ml-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div >
  );
}