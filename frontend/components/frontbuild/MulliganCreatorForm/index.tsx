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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cardMatchResultSchema } from "@/app/schemas";
import { HeroClass } from "@/app/types";

export function MulliganCreatorForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof cardMatchResultSchema>>({
    resolver: zodResolver(cardMatchResultSchema),
    defaultValues: {
      myClassId: "",
      classOponentId: "",
      turnsDuration: "",
      win: true,
      initialCards: "",
      discardedCards: "",
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
      console.log("Result saved");
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
            name="myClassId"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>My Class</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={HeroClass.Druid}>Druid</SelectItem>
                        <SelectItem value={HeroClass.Paladin}>
                          Paladin
                        </SelectItem>
                        <SelectItem value={HeroClass.DeathKnight}>
                          Death Knight
                        </SelectItem>
                        <SelectItem value={HeroClass.Mage}>Mage</SelectItem>
                        <SelectItem value={HeroClass.Warlock}>
                          Warlock
                        </SelectItem>
                        <SelectItem value={HeroClass.Warrior}>
                          Warrior
                        </SelectItem>
                        <SelectItem value={HeroClass.Shaman}>Shaman</SelectItem>
                        <SelectItem value={HeroClass.Rogue}>Rogue</SelectItem>
                        <SelectItem value={HeroClass.Hunter}>Hunter</SelectItem>
                        <SelectItem value={HeroClass.DemonHunter}>
                          Demon Hunter
                        </SelectItem>
                        <SelectItem value="priest">Priest</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="classOponentId"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Oponent class</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={HeroClass.Druid}>Druid</SelectItem>
                        <SelectItem value={HeroClass.Paladin}>
                          Paladin
                        </SelectItem>
                        <SelectItem value={HeroClass.DeathKnight}>
                          Death Knight
                        </SelectItem>
                        <SelectItem value={HeroClass.Mage}>Mage</SelectItem>
                        <SelectItem value={HeroClass.Warlock}>
                          Warlock
                        </SelectItem>
                        <SelectItem value={HeroClass.Warrior}>
                          Warrior
                        </SelectItem>
                        <SelectItem value={HeroClass.Shaman}>Shaman</SelectItem>
                        <SelectItem value={HeroClass.Rogue}>Rogue</SelectItem>
                        <SelectItem value={HeroClass.Hunter}>Hunter</SelectItem>
                        <SelectItem value={HeroClass.DemonHunter}>
                          Demon Hunter
                        </SelectItem>
                        <SelectItem value="priest">Priest</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="turnsDuration"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Turns</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1"
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
          <FormField
            control={form.control}
            name="initialCards"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Selected Cards</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ragnaros,card2,card3"
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
            name="discardedCards"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Discarded Cards</FormLabel>
                <FormControl>
                  <Input
                    placeholder="card1,card2,card3"
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
    </div>
  );
}
