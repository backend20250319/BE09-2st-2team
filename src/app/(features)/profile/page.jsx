"use client";

import React, { useState } from "react";
import ProfilePage from "./components/profile-page/ProfilePage";

export default function PostModalTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);

  return (
    <div style={{ padding: "50px" }}>
      <ProfilePage />
    </div>
  );
}
