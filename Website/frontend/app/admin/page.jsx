"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../../utils/auth";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) router.push("/admin/login");
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/admin/artists">Artists</a></li>
        <li><a href="/admin/events">Events</a></li>
        <li><a href="/admin/gallery">Gallery</a></li>
      </ul>
    </div>
  );
}
