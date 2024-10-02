"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {

  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello World</h1>

      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}

    </main>
  );
}
