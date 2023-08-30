import React from "react";
import PromptCard from "./PromptCard";

interface Props {
  data: any[];
}

const PromptCardList = ({ data }: Props) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PromptCardList;
