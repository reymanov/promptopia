"use client";

import PromptCardList from "@components/PromptCardList";
import React, { useState, useEffect } from "react";

export async function getPromptsByTag(tag: string) {
  const res = await fetch(`/api/tags/${tag}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
}

interface Props {
  params: any;
}

const TagPage = ({ params }: Props) => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await getPromptsByTag(params.tag);
        console.log(data);
        setPrompts(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPrompts();
  }, []);

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">#{params.tag}</span>
      </h1>

      <PromptCardList data={prompts} />
    </section>
  );
};

export default TagPage;
