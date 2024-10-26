import { useState } from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getAllPosts } from "@/lib/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Sidebar from "@/components/sidebar";
import PostList from "@/components/post-list";

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
  emoji: string;
  id: string;
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "content", "tags"]);
  const emojis = ["📷", "🎉", "🚀", "🌟", "🔥", "💡", "📚", "✈️", "🎨", "🎵"];

  // Add a random emoji and unique ID to each post
  const postsWithEmojis = allPosts.map((post, index) => ({
    ...post,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    id: `${post.slug}-${index}`,
  }));

  return {
    props: { allPosts: postsWithEmojis },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate the current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = 0; // Always start from the first post
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Load more posts
  const loadMore = () => setCurrentPage((prevPage) => prevPage + 1);

  // Extract unique categories
  const categories = Array.from(new Set(allPosts.flatMap((post) => post.tags)));

  return (
    <>
      <Header allPosts={allPosts} />
      <Head>
        <title>ぽんろぐ備忘録</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      <div className="bg-gray-100 py-24 sm:py-32" id="posts">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex">
          <div className="w-3/4">
            <PostList
              posts={currentPosts}
              totalPosts={allPosts.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              loadMore={loadMore}
            />
          </div>
          <Sidebar categories={categories} allPosts={allPosts} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
