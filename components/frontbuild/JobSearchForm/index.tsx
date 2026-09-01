"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loading } from "@/components/common/Loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JobSearchError from "./JobSearchError";
import { useCreateJobSearchMutation } from "@/lib/features/job-offer-ai/jobOfferAiApiSlice";
import { JobSearch, jobSearchSchema } from "@/app/(job-offer-ai)/schemas";

export function JobSearchForm() {
  const [createJobSearch, { data, isError, isSuccess, isLoading }] =
    useCreateJobSearchMutation();

  const jobSearchForm = useForm<JobSearch>({
    resolver: zodResolver(jobSearchSchema),
    defaultValues: {
      linkedinJobOfferUrl: "",
    },
  });

  //TODO: Transformar en Mutation de RTK
  async function onSubmit(data: z.infer<typeof jobSearchSchema>) {
    try {
      const response = await createJobSearch(data);
      // const jobResponse = await createJobSearch();
      // setData(jobResponse.data);
    } catch (error) {
      console.error("Error calling google api cloud:", error);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <JobSearchError cleanErrors={() => {}} />;
  }

  if (isSuccess) {
    return (
      <p>Job lint has been generated, try later until it gets completed</p>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Job Lint</CardTitle>
        <CardDescription>
          Enter LinkedIN Url and start the research!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...jobSearchForm}>
          <form onSubmit={jobSearchForm.handleSubmit(onSubmit)}>
            <FormField
              control={jobSearchForm.control}
              name="linkedinJobOfferUrl"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>LinkedIN URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.linkedin.com/jobs/view/4225517886"
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
                disabled={isLoading}
                data-testid="submit-button-job-check-form"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
