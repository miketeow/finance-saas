import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <main>
      <nav>
        <UserButton afterSignOutUrl="/" />
      </nav>
      <div>Dashboard Page</div>
    </main>
  );
};

export default DashboardPage;
