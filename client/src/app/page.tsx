"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/accounts")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data[0].country);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-7xl p-20">
      <p> {!loading ? message : "Loading.."}</p>
    </div>
  );
}
