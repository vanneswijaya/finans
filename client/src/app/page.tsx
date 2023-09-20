"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.users);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p> {!loading ? message : "Loading.."}</p>
    </div>
  );
}
