"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CardDetail } from "./CardDetail";
import { useSearchCardMutation } from "@/lib/features/tasks/hearthstoneApiSlice";
import CardSearchForm from "./form";
import { hearthstoneCardSchema } from "@/app/(hs-card-search)/schema";

export function HearthstoneCardSearchForm() {
  const [searchCard, { data, isSuccess, isLoading, reset }] =
    useSearchCardMutation();
  const form = useForm<z.infer<typeof hearthstoneCardSchema>>({
    resolver: zodResolver(hearthstoneCardSchema),
    defaultValues: {
      cardName: "",
    },
  });

  async function onSubmit(data: z.infer<typeof hearthstoneCardSchema>) {
    try {
      await searchCard(data).unwrap();
    } catch (error) {
      console.error("Error adding card.", error);
    }
  }

  const onResetSearch = () => {
    form.reset();
    reset();
  };

  return (
    <AnimatePresence>
      {isSuccess ? (
        <motion.div
          key="card-detail"
          //nos aseguramos de que la animacion empiece vacia
          initial={{ opacity: 0 }}
          //final opacity en 1 significa mostrar y
          animate={{ opacity: 1 }}
          className="w-full flex justify-center items-center"
          // exit={{ opacity: 1 }}
        >
          <CardDetail data={data} onResetSearch={onResetSearch} />
        </motion.div>
      ) : (
        <motion.div
          key="card-form"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 1 }}
          exit={{ opacity: 0, y: 0 }}
          className="w-full flex justify-center items-center"
        >
          <CardSearchForm
            form={form}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
