import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ConsultModal } from "@/components/modals/consult-modal";
import { VideoModal } from "@/components/modals/video-modal";
import { ApplyModal } from "@/components/modals/apply-modal";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ConsultModal />
      <VideoModal />
      <ApplyModal />
    </div>
  );
}
