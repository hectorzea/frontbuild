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
import {
  useLoginMutation,
  useLogoutMutation,
} from "@/lib/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Check, CircleX } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();
  const [logout, { isSuccess: isSuccessLogout }] = useLogoutMutation();
  const [login, { data, isSuccess, isError, isLoading }] = useLoginMutation();

  const token = useSelector((state: RootState) => state.auth.accessToken);
  const isAuth = !!token;

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      await login(data).unwrap();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    const result = await logout().unwrap();
    console.log(result);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const goToRegister = () => {
    router.push(`/login/register`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col items-center gap-y-3">
            <p data-testid="login-title">Profile Login Form</p>
            {isSuccess && (
              <Alert className="bg-green-900">
                <Check />
                <AlertTitle>{`Logged in as ${data?.user}`}</AlertTitle>
              </Alert>
            )}
            {isSuccessLogout && (
              <Alert className="bg-green-900">
                <Check />
                <AlertTitle>{`Success Logout`}</AlertTitle>
              </Alert>
            )}
            {isError && (
              <Alert className="bg-red-500">
                <CircleX />
                <AlertTitle>Error on login user</AlertTitle>
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
                <FormItem className="text-center">
                  <FormLabel className="text-center">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="test@test.com"
                      data-testid="login-email-input"
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
                      data-testid="login-password-input"
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
                disabled={isAuth || isLoading}
                type="submit"
                className="mt-4 w-full bg-green-300"
                data-testid="submit-login-button"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
        <Button
          onClick={goToRegister}
          className="mt-4 w-full bg-amber-400"
          data-testid="register-button"
          disabled={isAuth}
        >
          Register
        </Button>
        <Button
          onClick={onLogout}
          className="mt-4 w-full"
          data-testid="logout-button"
          disabled={!isAuth}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
