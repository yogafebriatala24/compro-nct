"use client";
import React, { Suspense, useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

async function GetArtikelDetail({ slug }: { slug: string }) {
  // Wait for the GetArtikelDetail
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
        <GetArtikelDetail slug={params} />
      </Suspense>
    </>
  );
}
