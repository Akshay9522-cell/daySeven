import Image from "next/image";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
   <>
   <Navbar   />
   <Toaster/>
   </>
  );
}
