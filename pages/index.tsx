import React, { useState } from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
import Pagination from '../components/Pagination';

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("asdasd");
  console.log(context);
  const feed = await prisma.post.findMany({
    skip: (30),
    take: 100,
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.feed.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          <div>
            {currentPosts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
            ))}
          
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={props.feed.length}
              paginate={paginate}
              currPage={currentPage} />
          </div>
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;