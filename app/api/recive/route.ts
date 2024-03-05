import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const Do = async (email: string) => {
  const backend_api = `https://api.github.com/orgs/${process.env.ORG_NAME}/invitations`;
  const data = {
    email: email,
    role: "direct_member",
  };

  const response = await fetch(backend_api, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.Token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return false;
  }

  return true;
};

const handler = async (request: Request) => {
  if (request.method === "POST") {
    const res = await request.json();
    const { email } = res;
    const result = await Do(email);
    if (result === true) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 200,
        }
      );
    }
  } else {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 200,
      }
    );
  }
};

export { handler as GET, handler as POST };
