import Image from "next/image";
import logo from "./logo.svg";

export default function AppLogo() {
  return (
    <div className="app-logo">
      <Image src={logo} layout="fixed" width={60} height={20} alt="logo" />
    </div>
  );
}
