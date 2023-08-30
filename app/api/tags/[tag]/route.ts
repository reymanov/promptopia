import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req: Request, { params }: any) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({ tag: params.tag }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
