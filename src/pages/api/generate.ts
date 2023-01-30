// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prompt = req.body.prompt;
  const negative_prompt = req.body.negative_prompt;

  let firstResponse = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + "add_key_here"
    },
    body: JSON.stringify({
      version:
        "f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1",
      input: {
        prompt,
        negative_prompt,
        width: 384,
        height: 512
      }
    })
  });

  let startResponse = await firstResponse.json();
  let endpointURL = startResponse.urls.get;

  let generatedImage = null;

  while (!generatedImage) {
    let finalResponse = await fetch(endpointURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + "add_key_here"
      }
    });
    let jsonFinalResponse = await finalResponse.json();

    if (jsonFinalResponse.status === "succeeded") {
      generatedImage = jsonFinalResponse.output;
    } else if (jsonFinalResponse.status === "failed") {
      console.log("jsonFin", jsonFinalResponse);
      break;
    } else {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  res.status(200).json(generatedImage ? generatedImage : "Failed to restore");
}
