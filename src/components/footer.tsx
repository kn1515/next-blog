import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © ぽん
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://twitter.com/Non_c5c"
            className="ml-3 text-gray-500"
          >
            <FaXTwitter size={32} /> {/* サイズを32に設定 */}
          </Link>
          <Link href="https://github.com/kn1515" className="ml-3 text-gray-500">
            <FaGithub size={32} /> {/* サイズを32に設定 */}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
