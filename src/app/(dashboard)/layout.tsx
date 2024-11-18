"use client";
import { ReactNode } from "react";
import Sidebar from "@/components/sideMenu";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
}
