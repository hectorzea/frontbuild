"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/frontbuild/Loading";
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
import { Switch } from "@/components/ui/switch";
import { cardMatchResultSchema } from "@/app/schemas";
import { toast } from "sonner";

export function MulliganCreatorForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof cardMatchResultSchema>>({
    resolver: zodResolver(cardMatchResultSchema),
    defaultValues: {
      win: true,
      matchUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof cardMatchResultSchema>) {
    try {
      console.log(data);
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card-match-results`,
        data
      );
      toast("Match has been added.");
      setLoading(false);
    } catch (error) {
      console.error("Error calling hz-server api:", error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-4/12">
      Mulligan Creator
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="matchUrl"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Match Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://hsreplay.net/replay/3B9Wn9qJhgQej7HJUywCTf"
                    data-testid="card-search-input-field"
                    {...field}
                    className="max-w-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="win"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Win</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex">
            <Button
              type="submit"
              className="mt-4"
              disabled={loading}
              data-testid="submit-button-card-search-form"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
