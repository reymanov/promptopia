"use client";

import { useState, useEffect } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/prompt");
        const data = await res.json();

        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} />
    </section>
  );
};

export default Feed;
