import React from "react";
import PromptCard from "./PromptCard";

interface Props {
  data: any[];
  handleTagClick: (tag: string) => void;
}

const PromptCardList = ({ data, handleTagClick }: Props) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default PromptCardList;
