"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "@/app/(profile)/schema";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/lib/features/auth/authApi";

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      console.log(data);
      const result = await login(data).unwrap();
      console.log(`Generated token ${result.accessToken}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col items-center gap-y-3">
            <p>Profile Login Form</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormLabel className="text-center">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="test@test.com"
                      data-testid="card-search-input-field"
                      {...field}
                      className="max-w-md mt-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormLabel className="text-center">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      data-testid="card-search-input-field"
                      {...field}
                      className="max-w-md mt-3"
                      type="password"
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
                data-testid="submit-button-card-search-form"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
