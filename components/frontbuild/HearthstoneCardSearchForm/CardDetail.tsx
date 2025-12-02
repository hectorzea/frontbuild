import * as React from "react";
import Image from "next/image";
import { BrushCleaningIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HearthstoneCardInfo } from "@/app/types";

export interface IAppProps {
  data: HearthstoneCardInfo;
}

export function CardDetail({ data }: IAppProps) {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-row gap-x-5 flex-wrap">
          <div className="flex flex-col">
            <p className="text-center">Your card</p>
            <Image
              src={data.img}
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <p>Nombre Carta</p>
              <p>Crocolisco Acuatico</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>Coste</p>
              <p>9</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>Tipo</p>
              <p>Bestia</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>Efecto</p>
              <p>Daña al oponente enmigo y revientlo a patadas</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>Otros Temas</p>
              <p>Daña al oponente enmigo y revientlo a patadas</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>Tokens</p>
              <p>Ver Tokens</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
