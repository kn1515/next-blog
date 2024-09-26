import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import { FaPersonWalking, FaCube, FaChartLine } from "react-icons/fa6";
import { DiCode } from "react-icons/di";
import { IconContext } from "react-icons";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>

        <Container>
          <Header />

          <>
            <Head>
              <title>About</title>
            </Head>
            <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
                <img
                  src="https://github.com/kn1515.png"
                  alt="GitHub Profile"
                  className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-8 xl:h-8 rounded-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-lg mb-4">
                  ぽんと申します。1996年生まれです。大学では文系でした。
                  <br />
                  現在は、とあるSIerでバックエンドエンジニアとして働いています。
                  <br />
                  主にPHP/LaravelでのAPI開発を行っています。
                  <br />
                  社内システムの運用とかもしております。
                  <br />
                  個人としては、SecurityやOS、低レイヤな話題に関心があります。
                </p>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-8 mx-auto md:mx-0">
                  {" "}
                </div>
                <h2 className="text-3xl font-semibold mb-3 mt-6">Skills</h2>
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 mx-auto md:mx-0">
                  <IconContext.Provider value={{ size: "4em" }}>
                    <FaCube />
                  </IconContext.Provider>
                </div>
                <h3 className="text-3sm font-semibold mb-3 mt-6">Backend</h3>
                <ul className="list-disc list-inside mb-4">
                  <li>PHP/Laravel</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Docker</li>
                  <li>PostgreSQL</li>
                </ul>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-8 mx-auto md:mx-0">
                  {" "}
                </div>
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 mx-auto md:mx-0">
                  <IconContext.Provider value={{ size: "4em" }}>
                    <DiCode />
                  </IconContext.Provider>
                </div>
                <h3 className="text-3sm font-semibold mb-3 mt-6">FrontEnd</h3>
                <ul className="list-disc list-inside mb-4">
                  <li>React.js</li>
                  <li>JavaScript/TypeScript</li>
                  <li>tailwindcss</li>
                  <li>Material UI</li>
                </ul>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-8 mx-auto md:mx-0">
                  {" "}
                </div>
                <pre className="bg-gray-100 p-4 rounded mb-4 mx-auto md:mx-0">
                  <code>
                    {`const greeting = "Hello, world!";\nconsole.log(greeting);`}
                  </code>
                </pre>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-8 mx-auto md:mx-0">
                  {" "}
                </div>
              </div>
            </div>
          </>
        </Container>
      </Layout>
    </>
  );
}
