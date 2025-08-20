"use client";

import React from "react";
import { Header } from "../stories/Header"; // 👈 correct relative path
import "../stories/page.css"; // 👈 storybook page styles

type User = {
  name: string;
};

export default function Home() {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className="storybook-page">
        <h2>Pages in Next.js</h2>
        <p>
          This is the same page you saw in Storybook, now running in your Next.js app 🚀.
        </p>
        <p>
          You can still follow a{" "}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{" "}
          process: build atomic components → combine into pages → use them in routes.
        </p>
        <ul>
          <li>Use mock data while developing components</li>
          <li>Integrate services later without breaking the UI</li>
          <li>Preview states in Storybook before shipping</li>
        </ul>

        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the viewport in dev tools to test
          responsiveness.
        </div>
      </section>
    </article>
  );
}
