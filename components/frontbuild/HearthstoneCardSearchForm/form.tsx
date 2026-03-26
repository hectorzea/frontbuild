import { Button } from "@/components/ui/button";
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
import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { hearthstoneCardSchema } from "@/app/(hs-card-search)/schema";

interface CardSearchFormProps {
  form: UseFormReturn<z.infer<typeof hearthstoneCardSchema>>;
  onSubmit: (data: z.infer<typeof hearthstoneCardSchema>) => void;
  isLoading: boolean;
}

const CardSearchForm = ({ form, onSubmit, isLoading }: CardSearchFormProps) => {
  return (
    <UICard className="w-full max-w-md bg-hearthstone">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col items-center gap-y-3">
            <Image
              src="/files/hearthstone.png"
              loading="eager"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
              alt="Picture of the hearthstone logo"
            />
            <p>Hearthstone Card Search</p>
          </div>
        </CardTitle>
        <CardDescription>
          <p className="font-normal text-center">
            An app to find your card in an easy way
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormLabel className="text-center">
                    Type your card here...
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ragnaros the Firelord"
                      data-testid="card-search-input-field"
                      {...field}
                      className="max-w-md mt-3"
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
  );
};

export default CardSearchForm;
