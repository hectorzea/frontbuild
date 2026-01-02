"use client";
import Image from "next/image";
import { Card as UICard, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetCardTokensQuery } from "@/lib/features/tasks/hearthstoneApiSlice";

export interface ITokenDashboardProps {
  cardId: string;
}

export default function TokenDashboard({ cardId }: ITokenDashboardProps) {
  //TODO: terminar UI ERROR / SUCCESS
  const { data } = useGetCardTokensQuery(cardId);
  return (
    <div className="flex flex-col justify-center items-center m-5 min-h-screen">
      <p className="text-2xl my-2">Card Tokens</p>
      <Carousel className="w-full max-w-md" data-testid="carousel-card-tokens">
        <CarouselContent>
          {data?.map((cardToken, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <UICard>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={cardToken.imageUrl}
                      placeholder="blur"
                      blurDataURL={cardToken.imageUrl}
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
