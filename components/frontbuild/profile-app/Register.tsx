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
import { loginFormSchema } from "@/app/(login)/schema";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/lib/features/auth/authApiSlice";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Check, CircleX } from "lucide-react";

const RegisterForm = () => {
  const [register, { isSuccess, isError }] = useRegisterMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      await register(data).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const onLoginBack = async () => {
    router.push(`/login`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col items-center gap-y-3">
            <p>Register Form</p>
            {isSuccess && (
              <Alert className="bg-green-900">
                <Check />
                <AlertTitle>{"Register success"}</AlertTitle>
              </Alert>
            )}
            {isError && (
              <Alert className="bg-red-500">
                <CircleX />
                <AlertTitle>{"Error registering user"}</AlertTitle>
              </Alert>
            )}
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
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
                <FormItem className="mt-5">
                  <FormLabel>Password</FormLabel>
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
            <div className="flex flex-col gap-5 ">
              <Button
                type="submit"
                className="mt-4 w-full bg-green-300"
                data-testid="submit-button-card-search-form"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
        <Button
          onClick={onLoginBack}
          className="mt-4 w-full"
          data-testid="logout-button"
        >
          Go back to login
        </Button>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
