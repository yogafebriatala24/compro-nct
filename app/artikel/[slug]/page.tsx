"use client";
import React, { Suspense, useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

async function Playlists({ slug }: { slug: string }) {
  // Wait for the playlists
  console.log("slug", slug);
  return (
    <>
      <div className="">OKOK</div>
    </>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    console.log("HALLO");
  }, []);

  return (
    <>
      <div>Page</div>
      <Suspense>
        <Playlists slug={params} />
      </Suspense>
    </>
  );
}
