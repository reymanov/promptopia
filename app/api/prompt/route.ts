import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
