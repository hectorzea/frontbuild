import * as React from "react";
import Image from "next/image";
import { BrushCleaningIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { HearthstoneCardInfo } from "@/app/types";
import Link from "next/link";

export interface IAppProps {
  data: HearthstoneCardInfo;
}

export function CardDetail({ data }: IAppProps) {
  return (
    <Card className="w-full max-w-4xl">
      <CardContent className="flex flex-row gap-x-5 flex-wrap md:flex-nowrap justify-center">
        <div className="flex flex-col">
          <p className="text-center font-bold text-2xl">{data.name}</p>
          <p className="text-center font-bold">{data.playerClass}</p>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
            <Image
              src={data.img}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Nombre Carta</p>
            <p>Crocolisco Acuaticos</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Coste</p>
            <p>9</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Tipo</p>
            <p>Bestia</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Efecto</p>
            <p>Daña al oponente enmigo y revientlo a patadas</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Otros Temas</p>
            <p>Daña al oponente enmigo y revientlo a patadas</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Otros Temas</p>
            <p>Daña al oponente enmigo y revientlo a patadas</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Tokens</p>
            <Link
              href={"/hs-card-search/tokens/token-id"}
              className="underline hover:text-gray-700 transition-all duration-300"
            >
              Ver Tokens
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
