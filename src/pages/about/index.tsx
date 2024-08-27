import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import { FaPersonWalking, FaCube, FaChartLine } from "react-icons/fa6";
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

          <section className="body-font">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <FaPersonWalking />
                    </IconContext.Provider>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-lg">
                      Who are you ...?
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-xg mb-4">
                    「ぽん」と申します。
                    <br />
                    Sierでバックエンドエンジニアとして働いています。
                    <br />
                    主にPHP/LaravelでのAPI開発を行っています。
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="body-font">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <FaCube />
                    </IconContext.Provider>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-lg">
                      Skill
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4">
                      {"   "}
                    </div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    Backend : PHP, Perl, Python, PostgreSQL
                    <br />
                    Frontend : React, TypeScript
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="body-font">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <FaChartLine />
                    </IconContext.Provider>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-lg">
                      Discography
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="font-medium title-font mt-4 text-base">
                    2022 ~ now
                  </h2>
                  <p className="mb-4 mt-1">XXX</p>
                  <h2 className="font-medium title-font mt-4 text-base">
                    2020 ~ 2022
                  </h2>
                  <p className="mb-4 mt-1">株式会社XXX</p>
                  <h2 className="font-medium title-font mt-4 text-base">
                    2016 ~ 2020
                  </h2>
                  <p className="mb-4 mt-1">Hoge大学　Hoge学部</p>
                  <p className="leading-relaxed text-lg mb-4"> </p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
