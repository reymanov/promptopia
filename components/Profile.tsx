import { Post } from "./Form";
import PromptCard from "./PromptCard";

interface Props {
  name: string;
  desc: string;
  data: Post[];
  isLoading?: boolean;
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
}

const Profile = ({
  name,
  desc,
  data,
  isLoading,
  handleEdit,
  handleDelete,
}: Props) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {isLoading ? (
          <div className="flex justify-center items-center">Loading...</div>
        ) : (
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Profile;
