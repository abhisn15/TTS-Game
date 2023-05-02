import { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Typewriter from "typewriter-effect";
import TextField from '@mui/material/TextField';
import { Fragment } from "react";
import { Input, MobileNav, Navbar } from "@material-tailwind/react";

import Perempuan from '../src/assets/perempuan.png'
import Laki from '../src/assets/laki.png'
import { OutlinedInput } from "@mui/material";

export default function App(props) {
  const [inputValue, setInputValue] = useState('');
  const [hideInput, setHideInput] = useState(true);
  const [kotak, setKotak] = useState(['', '', '', '', '', '', '']);
  const [kotak2, setKotak2] = useState(['', '', '', '', '']);
  const [kotak3, setKotak3] = useState(['', '', '', '']);
  const [kotak4, setKotak4] = useState(['', '', '', '', '']);
  const [kotak5, setKotak5] = useState(['', '', '', '']);
  const [kotak6, setKotak6] = useState(['', '', '']);
  const [kotak7, setKotak7] = useState(['', '', '', '', '']);
  const [kotak8, setKotak8] = useState(['', '', '']);
  const [kotak9, setKotak9] = useState(['', '', '', '']);
  const [kotak10, setKotak10] = useState(['', '', '', '', '']);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal)
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
      setKotak(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer2) {
      const jawaban = answer2.toUpperCase().split('');
      setKotak2(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer3) {
      const jawaban = answer3.toUpperCase().split('');
      setKotak3(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer4) {
      const jawaban = answer4.toUpperCase().split('');
      setKotak4(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer5) {
      const jawaban = answer5.toUpperCase().split('');
      setKotak5(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer6) {
      const jawaban = answer6.toUpperCase().split('');
      setKotak6(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer7) {
      const jawaban = answer7.toUpperCase().split('');
      setKotak7(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer8) {
      const jawaban = answer8.toUpperCase().split('');
      setKotak8(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer9) {
      const jawaban = answer9.toUpperCase().split('');
      setKotak9(jawaban);
    }

    if (trimmedInputValue.toLowerCase() === answer10) {
      const jawaban = answer10.toUpperCase().split('');
      setKotak10(jawaban);
    }
    if (trimmedInputValue.toLowerCase() === answer || trimmedInputValue.toLowerCase() === answer2 || trimmedInputValue.toLowerCase() === answer3 || trimmedInputValue.toLowerCase() === answer4 || trimmedInputValue.toLowerCase() === answer5 || trimmedInputValue.toLowerCase() === answer6 || trimmedInputValue.toLowerCase() === answer7 || trimmedInputValue.toLowerCase() === answer8 || trimmedInputValue.toLowerCase() === answer9 || trimmedInputValue.toLowerCase() === answer10) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Kerja Bagus!</strong>,
        html: <i>Kerenn kamu bisa menjawabnya</i>,
        icon: 'success',
        timer: 3000
      });
    } else if (inputValue === '') {
      MySwal.fire({
        title: <strong>Jawabanmu belum diisi!</strong>,
        html: <i>Isi dulu jawabannya !!</i>,
        icon: 'question',
        timer: 3000
      });
    } else {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawabanmu Salah!</strong>,
        html: <i>Coba lagi, Semangat!!</i>,
        icon: 'error',
        timer: 3000
      });
    }
    // if (kotak.join('') === answer && kotak2.join('') === answer2 && kotak3.join('') === answer3 && kotak4.join('') === answer4 && kotak5.join('') === answer5 && kotak6.join('') === answer6 && kotak7.join('') === answer7 && kotak8.join('') === answer8 && kotak9.join('') === answer9 && kotak10.join('') === answer10) {
    //   MySwal.fire({
    //     title: <strong>Selamat!</strong>,
    //     html: <i>Kamu berhasil menemukan semua jawabannya!</i>,
    //     icon: 'success',
    //     showCancelButton: true,
    //     confirmButtonText: 'Coba lagi',
    //     cancelButtonText: 'Selesai',
    //     reverseButtons: true
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       setBoxes(['', '', '', '', '', '', '']);
    //       setkotak2(['', '', '', '', '']);
    //       setKotak3(['', '', '', '']);
    //       setKotak4(['', '', '', '', '']);
    //       setKotak5(['', '', '', '']);
    //       setKotak6(['', '', '']);
    //       setKotak7(['', '', '', '', '']);
    //       setKotak8(['', '', '']);
    //       setKotak9(['', '', '', '']);
    //       setKotak10(['', '', '', '', '']);
    //       setHideInput(true);
    //     } else {
    //       setHideInput(false);
    //     }
    //   });
    // }
    if (trimmedInputValue.toLowerCase() === answer && kotak.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer2 && kotak2.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer3 && kotak3.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer4 && kotak4.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer5 && kotak5.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer6 && kotak6.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer7 && kotak7.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer8 && kotak8.every((box) => box !== '')) {
      // Menampilkan SweetAlert
      MySwal.fire({
        title: <strong>Jawaban sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer9 && kotak9.every((box) => box !== '')) {
      MySwal.fire({
        title: <strong>Jawabanmu sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    } else if (trimmedInputValue.toLowerCase() === answer10 && kotak10.every((box) => box !== '')) {
      MySwal.fire({
        title: <strong>Jawabanmu sudah terisi!</strong>,
        html: <i>Kamu sudah menjawab soal ini dengan benar</i>,
        icon: 'warning',
        timer: 3000
      });
    }

    setInputValue('');
  }

  const MySwal = withReactContent(Swal)

  const SemuaBoxTerisi =
    kotak.every((box) => box !== '') &&
    kotak2.every((box) => box !== '') &&
    kotak3.every((box) => box !== '') &&
    kotak4.every((box) => box !== '') &&
    kotak5.every((box) => box !== '') &&
    kotak6.every((box) => box !== '') &&
    kotak7.every((box) => box !== '') &&
    kotak8.every((box) => box !== '') &&
    kotak9.every((box) => box !== '') &&
    kotak10.every((box) => box !== '');

  if (SemuaBoxTerisi) {
    MySwal.fire({
      title: <strong>Selamat!</strong>,
      html: <i>Kamu telah menyelesaikan semua teka teki silang ini, pilih opsi mulai ulang untuk mengulang game dan memainkannya kembali</i>,
      imageUrl: 'https://media.istockphoto.com/id/1369741460/id/foto/piala-trofi-dengan-bintang-dengan-latar-belakang-putih.jpg?s=612x612&w=0&k=20&c=9zCaBNssZB_pLh3P2jkZH5a99YDBbhHITVYTzFkr7ng=',
      confirmButtonText: 'Mulai Ulang',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      imageWidth: 250,
      imageHeight: 280,
      imageAlt: 'Custom image',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload()
      }
    })
  }

  // if (inputValue === answer && answer2 && answer3 && answer4 && answer5 && answer6 && answer7 && answer8 && answer9 && answer10) {
  //   // Menampilkan SweetAlert
  //   MySwal.fire({
  //     title: <strong>Kerja Bagus!</strong>,
  //     html: <i>Kerenn kamu bisa menjawabnya</i>,
  //     icon: 'success'
  //   })
  // };

  // Responsive
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div>
      <Navbar className="relative mx-auto max-w-screen py-2 md:py-2 px-4 border-4 h-32 md:h-32 rounded-none md:rounded-b-[176px] rounded-b-[10px] shadow-md border-cyan-400 box-border lg:px-8 lg:py-4" >
        {/* <div className="relative left-[106px] max-[600px]:left-5 max-[600px]:bottom-2 mx-auto items-center justify-between text-3xl leading-9" style={{ opacity: 0.2 }}>
          <h1 className="title relative max-[600px]:w-[600px] max-[600px]:text-[18px] max-[400px]:top-2 max-[400px]:w-[400px] max-[400px]:text-[12px] font-extrabold text-black">Ayo Mainkan Teka-Teki Silang yang Menyenangkan ini!</h1>
          <p className="relative left-28 top-3 font-normal font-medium text-base max-[600px]:text-[11px] max-[600px]:left-4 max-[600px]:top-0 max-[400px]:w-[400px] max-[400px]:text-[8px] max-[400px]:left-[8px] max-[400px]:top-0 max-[400px]:font-bold text-black">Perhatikan soal soal tersebut dan tulis jawabannya di kolom bawah Jawabannya adalah.</p>
          <span className="title relative font-bold ml-40 bottom-[86px] text-[14px]">Scan QR </span>
          <QRCode className="relative bottom-[88px] left-[945px]" size={80} value="192.168.43.125:3000" />
        </div> */}
        <div className="container mx-auto">
          <div className="flex justify-around items-center md:mt-[-10px] mt-3">
            <div className=" text-center md:mt-[-20px]">
              <p className="text-md title font-bold md:text-2xl">Ayo Mainkan Teka-Teki Silang yang Menyenangkan ini!</p>
              <p className="text-xs md:text-base md:mt-3">Perhatikan soal soal tersebut dan tulis jawabannya di kolom bawah Jawabannya adalah.</p>
            </div>
            <div className="hidden md:block md:text-center md:mr-10">
              <span className="title font-bold">Scan QR</span>
              <QRCode className="" size={80} value="192.168.43.125:3000" />
            </div>
          </div>

        </div>

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
        <div className="container mx-auto md:mx-0 pt-7 pb-28 max-[600px]:mt-2 max-[1640px]:w-[684px] max-[600px]:w-[300px]">
          <div className="flex justify-center ml-[-260px] max-[600px]:ml-0 max-[600px]:mt-10">
            <div className="flex mt-2 mr-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">1</span>
            </div>
            {kotak.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-260px] max-[600px]:ml-[-0px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">2</span>
            </div>
            {kotak2.map((box, index) => (
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
            {kotak3.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-5 ml-[-260px] max-[600px]:ml-0">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">4</span>
            </div>
            {kotak4.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[0px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">5</span>
            </div>
            {kotak5.map((box, index) => (
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
            {kotak6.map((box, index) => (
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
            {kotak7.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[0px]">
            <div className="flex mr-2 mt-2 items-center justify-center w-6 h-6 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">8</span>
            </div>
            {kotak8.map((box, index) => (
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
              <span className="text-black font-bold">9</span>
            </div>
            {kotak9.map((box, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <p className="text-xl">{box}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ml-[-220px] max-[600px]:ml-[0px]">
            <div className="flex mr-2 mt-1 items-center justify-center w-8 h-8 border-2 border-cyan-500 rounded-full">
              <span className="text-black font-bold">10</span>
            </div>
            {kotak10.map((box, index) => (
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
      <div className="fixed bottom-0 left-0 right-0 z-10 border-4 h-32 bg-white rounded-none rounded-t-[176px] max-[600px]:rounded-t-[10px] max-[600px]:border-2 border-cyan-400 box-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="justify-center mt-5 max-[600px]:mt-8">
              <h1 className='title text-center max-[600px]:text-[12px]'>Jawabannya adalah</h1>
              <div className="mt-2">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Masukkan jawaban"
                    value={inputValue}
                    onChange={handleInputChange}
                    className={hideInput ? 'border-2 rounded-md max-[600px]:w-[120px] max-[600px]:h-[30px] px-4 py-2 ml-2' : 'hidden'}
                  />
                </form>
              </div>
            </div>
            <div className="flex justify-around items-center z-50 bottom-0">
              <img alt="laki" src={Laki} className="fixed absolute mt-16 " style={!isMobile ? { width: '40%', marginRight: '1000px' } : { width: '100%', marginRight: '400px' }} />
              <img alt="perempuan" src={Perempuan} className="fixed absolute mt-16" style={!isMobile ? { width: '40%', marginLeft: '600px' } : { width: '100%', marginRight: '-130px' }} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}