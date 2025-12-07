"use client";

import * as React from "react";
import Image from "next/image";
import { Card as UICard, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/app/types";
import { useGetCardTokensQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
// import Image from "next/image";

const cardTokens = [
  {
    _id: "6931be7031ece6cecd706401",
    id: "TIME_619t2",
    name: "What Befell Zandalar",
    imagenUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t2.png",
    tokens: [],
    type: "SPELL",
    cardClass: "DEATHKNIGHT",
    set: "TIME_TRAVEL",
    __v: 0,
  },
  {
    _id: "6931be7031ece6cecd706404",
    id: "TIME_619t3",
    name: "Boon of Power",
    imagenUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t3.png",
    tokens: [],
    type: "SPELL",
    cardClass: "DEATHKNIGHT",
    set: "TIME_TRAVEL",
    __v: 0,
  },
  {
    _id: "6931be7031ece6cecd706407",
    id: "TIME_619t4",
    name: "Boon of Longevity",
    imagenUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t4.png",
    tokens: [],
    type: "SPELL",
    cardClass: "DEATHKNIGHT",
    set: "TIME_TRAVEL",
    __v: 0,
  },
  {
    _id: "6931be7031ece6cecd70640a",
    id: "TIME_619t5",
    name: "Boon of Speed",
    imagenUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t5.png",
    tokens: [],
    type: "SPELL",
    cardClass: "DEATHKNIGHT",
    set: "TIME_TRAVEL",
    __v: 0,
  },
];

export interface ITokenDashboardProps {
  cardId: string;
}

export default function TokenDashboard({ cardId }: ITokenDashboardProps) {
  //TODO: terminar
  const { data, isSuccess, isError } = useGetCardTokensQuery(cardId);
  return (
    <div className="flex flex-col justify-center items-center m-5 min-h-screen">
      <p className="text-2xl my-2">Card Tokens</p>
      <Carousel className="w-full max-w-md">
        <CarouselContent>
          {data?.map((cardToken, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <UICard>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={cardToken.imageUrl}
                      width={400}
                      height={400}
                      alt={cardToken.name}
                    />
                  </CardContent>
                </UICard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
