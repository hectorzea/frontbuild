"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/frontbuild/Loading";
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
import { useMsw } from "@/hooks/useMsw";

const FormSchema = z.object({
  cardName: z.string().min(2, {
    message: "Card name must be have at least 2 characters.",
  }),
});

export function HearthstoneCardFinderForm() {
  const mswLoaded = useMsw();
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
      console.log(`Calling API with mswLoaded in ${mswLoaded}`);
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
      {data ? (
        <div className="flex flex-col">
          <p>Your card</p>
          <Image
            src={data.img}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>Please, enter the name of the card</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ragnaros the Firelord"
                      data-testid="job-check-input-field"
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
                data-testid="submit-button-job-check-form"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
