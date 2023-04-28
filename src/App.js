import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import NavbarBottom from "./NavbarBottom";

export default function App() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="relative mx-auto max-w-screen py-2 px-4 border-4 h-32 rounded-none rounded-b-[176px] shadow-md border-cyan-400 box-border lg:px-8 lg:py-4" >
      <div className="relative left-[106px] mx-auto items-center justify-between font-extrabold text-3xl leading-9">
        <h1 className="title">Ayo Mainkan Teka-Teki Silang yang Menyenangkan ini!</h1>
        <p className="relative left-28 top-3 font-normal font-medium text-base">Perhatikan soal soal tersebut dan tulis jawabannya di kolom bawah Jawabannya adalah.</p>
      </div>
      <MobileNav>
      </MobileNav>
      <NavbarBottom />
    </Navbar>
  );
}