"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images from the public directory
import img1 from "/public/images/1.jpg";
import img2 from "/public/images/2.jpg";
import img3 from "/public/images/3.jpg";
import img4 from "/public/images/4.jpg";

export default function About() {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt={`about-${index + 1}`}
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Aniket Kashid - a passionate developer, avid writer, and a connoisseur of awesome design. Welcome to my corner of the digital world!
        </Paragraph>
        <Paragraph className="mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the art of crafting exceptional digital experiences.
        </Paragraph>
        <Paragraph className="mt-4">
          But my journey doesn&apos;t stop at coding. With a heart full of words and a mind brimming with ideas, I&apos;ve ventured into the realm of writing. From tech articles that unravel complex concepts to creative tales that ignite the imagination, I weave words to inform, entertain, and inspire.
        </Paragraph>
        <Paragraph className="mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
