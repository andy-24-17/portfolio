import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <iframe 
        src="/resume.pdf" 
        className="w-full h-[600px] border rounded-lg"
      ></iframe>
    </div>
  );
}

