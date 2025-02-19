"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  {
    title: "Ali Gaber",
    description: [
      "Licensed trainee lawyer by Ministry of Justice",
      "Bachelor’s degree (1st honors) from University of Jeddah",
      "Completed field training with elite lawyers",
    ],
    image: "/Capture22.JPG",
  },
  {
    title: "Yasser Khaled Khogeer",
    description: [
      "Licensed lawyer, co-founder, international arbitrator",
      "Member of Int’l Academy of Mediation and Arbitration",
      "Former Amnesty International member",
      "Master’s in Criminal Law from Naif Arab University",
      "Thesis on financial market crimes (Saudi vs. Egyptian law)",
    ],
    image: "/Capture211.JPG",
  },
  {
    title: "Jawaher",
    description: [
      "Licensed trainee lawyer by Ministry of Justice",
      "Bachelor’s degree (1st honors) from University of Jeddah",
      "Completed field training with elite lawyers",
    ],
    image: "/team_4.jpeg",
  },
  {
    title: "Hussain Jafar Al-Sharif",
    description: [
      "Licensed lawyer, co-founder, accredited on multiple platforms",
      "Master’s in Int’l Law (UK), BA in Legal Studies & Sharia (Umm Al-Qura)",
      "Gained local/international expertise from legal scholars",
      "Thesis on Int’l Investment Laws (published in Saudi Digital Library)",
    ],
    image: "/Capture211.JPG",
  },
];

export function CarouselSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  return (
    <section  className="bbackgorund py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Our Experts
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 flex items-stretch" ref={emblaRef}>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="border-none flex flex-col w-full h-full">
                  <CardContent className="flex flex-col items-center p-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover mb-4 w-full h-64"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h3>

                    {/* Render description as bullet points */}
                    <ul className="list-disc list-inside text-left text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
