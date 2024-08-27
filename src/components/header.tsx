import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/assets/icon.svg";
import ChangeThemeButton from "./chante-theme-button";
import { CMS_NAME } from "../lib/constants";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link
        href="/"
        className="flex title-font font-medium items-center mb-4 md:mb-0"
      >
        <div className=" relative w-10 h-10 p-2 rounded-lg">
          <Image fill={true} src={Icon} alt="icon" />
        </div>
        <span className="ml-3 text-xl">{CMS_NAME}</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        {/* <Link href="posts" className="mr-5 hover:text-gray-900">Posts</Link> */}
        <Link href="about" className="mr-5 hover:text-gray-900">
          About
        </Link>
      </nav>
      <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
        <ChangeThemeButton />
      </span>
      {/* <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
        Contact
      </button> */}
    </div>
  );
};

export default Header;
