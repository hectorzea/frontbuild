import Image from "next/image";
import { BookIcon, BrushCleaningIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Card as UICard, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Card } from "@/app/types";

export interface IAppProps {
  data: Card;
}

export function CardDetail({ data }: IAppProps) {
  function onResetSearch(): void {
    //todo pass reset to this component to dont refresh
    window.location.reload();
  }
  return (
    <UICard className="w-full max-w-4xl">
      <CardContent className="flex flex-row gap-x-5 flex-wrap md:flex-nowrap justify-center">
        <div className="flex flex-col">
          <p className="text-center font-bold text-2xl">{data.name}</p>
          <p className="text-center font-bold">{data.cardClass}</p>
          <div className="flex justify-center gap-5 mt-5">
            <Button
              data-testid="reset-button-card-search"
              onClick={onResetSearch}
            >
              <BrushCleaningIcon />
              Reset Search
            </Button>
            <Button data-testid="wiki-button-card-search">
              <BookIcon />
              <a
                href={`https://hearthstone.wiki.gg/wiki/${data.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to wiki
              </a>
            </Button>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Image
              src={data.imageUrl}
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
              href={`/projects/hs-card-search/tokens/${data.id}`}
              className="underline hover:text-gray-700 transition-all duration-300"
            >
              Ver Tokens
            </Link>
          </div>
        </div>
      </CardContent>
    </UICard>
  );
}
