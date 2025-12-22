"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/common/Loading";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardDetail } from "./CardDetail";
import { Card } from "@/app/types";
import { useSearchCardMutation } from "@/lib/features/tasks/hearthstoneApiSlice";

const FormSchema = z.object({
  cardName: z.string().min(2, {
    message: "Card name must be have at least 2 characters.",
  }),
});

export function HearthstoneCardSearchForm() {
  const [searchCard, { data, isSuccess, isLoading }] = useSearchCardMutation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cardName: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await searchCard(data);
    } catch (error) {
      console.error("Error adding card.", error);
    }
  }

  return (
    <AnimatePresence>
      {isSuccess ? (
        <motion.div
          key="box"
          //nos aseguramos de que la animacion empiece vacia
          initial={{ opacity: 0 }}
          //final opacity en 1 significa mostrar y
          animate={{ opacity: 1 }}
          className="w-full flex justify-center items-center"
          // exit={{ opacity: 1 }}
        >
          <CardDetail data={data} />
        </motion.div>
      ) : (
        // <CardDetail data={data} />
        <UICard className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col items-center gap-y-3">
                <Image
                  src="/files/hearthstone.png"
                  width={150}
                  height={150}
                  style={{ width: "auto", height: "auto" }}
                  alt="Picture of the hearthstone logo"
                />
                <p>Hearthstone Card Search</p>
                <p className="font-normal">
                  Enter the card name and get your card easily!
                </p>
              </div>
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card name:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ragnaros the Firelord"
                          data-testid="card-search-input-field"
                          {...field}
                          className="max-w-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex ">
                  <Button
                    type="submit"
                    className="mt-4 w-full"
                    disabled={isLoading}
                    data-testid="submit-button-card-search-form"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </UICard>
      )}
    </AnimatePresence>
  );
}
