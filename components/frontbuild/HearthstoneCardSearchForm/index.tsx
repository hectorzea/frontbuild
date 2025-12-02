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
import axios from "axios";
import { useState } from "react";
import { HearthstoneCardInfo } from "@/app/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardDetail } from "./CardDetail";

const FormSchema = z.object({
  cardName: z.string().min(2, {
    message: "Card name must be have at least 2 characters.",
  }),
});

export function HearthstoneCardSearchForm() {
  const [data, setData] = useState<HearthstoneCardInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cardName: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const jobResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hs-card-search`,
        { cardName: data.cardName }
      );
      setData(jobResponse.data);
      console.log("Response from API:", jobResponse.data.img);
      setLoading(false);
    } catch (error) {
      console.error("Error calling google api cloud:", error);
      setData(null);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AnimatePresence>
        {data ? (
          <motion.div
            key="box"
            //nos aseguramos de que la animacion empiece vacia
            initial={{ opacity: 0 }}
            //final opacity en 1 significa mostrar y
            animate={{ opacity: 1 }}
            // exit={{ opacity: 1 }}
          >
            <CardDetail data={data} />
          </motion.div>
        ) : (
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center gap-y-3">
                  <Image
                    src="/files/hearthstone.png"
                    width={200}
                    height={200}
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
                      disabled={loading}
                      data-testid="submit-button-card-search-form"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </AnimatePresence>
    </>
  );
}
