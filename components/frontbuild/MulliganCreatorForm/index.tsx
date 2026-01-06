"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/common/Loading";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  CardMatchResult,
  cardMatchResultSchema,
} from "@/app/(frontbuild)/schemas";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type MulliganCreatorFormProps = {
  route?: string;
};

export function MulliganCreatorForm({ route }: MulliganCreatorFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const form = useForm<CardMatchResult>({
    resolver: zodResolver(cardMatchResultSchema),
    defaultValues: {
      win: true,
      matchUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof cardMatchResultSchema>) {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card-match-results`,
        data
      );
      toast("Match has been added.");
      setError(false);
      if (route) {
        router.push(route);
      } else {
        router.back();
      }
    } catch (error) {
      console.log("Error calling hz-server api:", error);
      setLoading(false);
      setError(true);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="matchUrl"
            render={({ field }) => (
              <div className="flex flex-col gap-3 w-full">
                <p>Match URL</p>
                <Input
                  placeholder="https://hsreplay.net/replay/id"
                  data-testid="card-match-url-input-field"
                  {...field}
                />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="win"
            render={({ field }) => (
              <div className="flex flex-col items-center">
                <p>Win</p>
                <Switch
                  data-testid="switch-win-loose"
                  className="mt-5"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </div>
            )}
          />
        </div>

        <div className="flex gap-3">
          <Button
            type="submit"
            className="mt-4"
            disabled={loading}
            data-testid="submit-button-card-match-result"
          >
            Submit
          </Button>
          <Button
            className="mt-4"
            data-testid="close-button-card-match-form"
            onClick={() => {
              router.back();
            }}
          >
            Close
          </Button>
        </div>
        {error && <p className="text-red-400 mt-3">Error adding match.</p>}
      </form>
    </Form>
  );
}
