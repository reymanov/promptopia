"use client";

import Image from "next/image";
import { Post } from "./Form";
import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  post: Post;
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
}

const PromptCard = ({ post, handleEdit, handleDelete }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const [copied, setCopied] = useState<string>("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);

    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  const handleTagClick = (tag: string) => {
    router.push(`/tag/${tag}`);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 crusor-pointer">
          <Image
            src={post?.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-600">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy_icon"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user?.email === post.creator.email &&
        pathName === "/profile" && (
          <div className="flex justify-end items-center gap-3">
            <button
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              onClick={() => handleEdit && handleEdit(post)}
            >
              Edit
            </button>

            <button
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              onClick={() => handleDelete && handleDelete(post)}
            >
              Delete
            </button>
          </div>
        )}
    </div>
  );
};

export default PromptCard;
