import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Service() {
  return (
    <main className="dark:bg-zinc-950">
      <div className="flex flex-col text-center gap-5 bg-[#101010] pt-20 pb-5">
        <h1 className="text-5xl font-extrabold leading-tighter  font-body-14 first-letter">
          Considering Our Service?
        </h1>
        <p>Think how much our website made a positive impact</p>
      </div>
      <div className="flex justify-center bg-[#101010] pb-20">
        <Button className="">
          <Mail className="mr-2 h-4 w-4" /> Contact us
        </Button>
      </div>
    </main>
  );
}
