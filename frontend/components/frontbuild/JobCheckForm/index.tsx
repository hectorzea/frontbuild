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
import Link from "next/link";
import { ArrowBigRight, BrushCleaningIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { JobOffer } from "@/app/types";

const FormSchema = z.object({
  linkedInJobUrl: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function JobCheckForm() {
  const [data, setData] = useState<JobOffer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      linkedInJobUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log("Calling API...");
      setLoading(true);
      const jobResponse = await axios.post(
        `http://localhost:3000/ai/process-job`,
        { linkedinJobUrl: data.linkedInJobUrl }
      );
      setData(jobResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("Error calling google api cloud:", error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="linkedInJobUrl"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>
                  Please, enter linkedIN job URL to initiate the lint
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.linkedin.com/jobs/view/123456789/"
                    data-testid="job-check-input-field"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-4"
            disabled={loading}
            data-testid="submit-button-job-check-form"
          >
            Submit
          </Button>
        </form>
      </Form>
      <Separator className="my-4" />
      {data ? (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-3">Job Information</h2>
          <div className="flex flex-row gap-2 items-center justify-between">
            <div>Company: {data?.companyName}</div>
            <div className="flex flex-row gap-2">
              <Button
                size={"sm"}
                data-testid={"download-cv-button"}
                className=""
              >
                <Link
                  href={data?.jobLink}
                  target="_blank"
                  aria-label="Go to job"
                >
                  Apply
                </Link>
                <ArrowBigRight />
              </Button>
              <Button
                size={"sm"}
                onClick={() => {
                  setData(null);
                  setLoading(false);
                  form.reset();
                }}
                disabled={loading}
                data-testid="submit-button"
              >
                Clean Data
                <BrushCleaningIcon />
              </Button>
            </div>
          </div>
          <div>Job Title: {data?.jobTitle}</div>
          <div>Job Description: {data?.jobDescription}</div>
          <div>Years of Experience: {data?.yearsOfExperience}</div>
          <Separator className="my-4" />
          <h2 className="text-2xl font-semibold mt-3">Hard Skills</h2>
          <h3 className="text-xl font-semibold mt-3">Frontend</h3>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {data?.hardSkills?.frontend?.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-3">Backend</h3>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {data?.hardSkills?.backend?.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-3">CI / CD</h3>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {data?.hardSkills?.cicd?.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-3">Testing</h3>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {data?.hardSkills?.testing?.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-3">Extras</h3>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {data?.hardSkills?.extras?.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <Separator className="my-4" />
          <h2 className="text-2xl font-semibold mt-3">Soft Skills</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {data?.softSkills?.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <Separator className="my-4" />
          <div className="mt-3">Salary Range: {data?.salaryRange}</div>
          <h3 className="text-2xl font-semibold mt-3">Location / Work Model</h3>
          <div>Work Environment: {data?.workEnvironment}</div>
          <div>Location: {data?.location}</div>
          <div>Allow Relocation: {data?.allowRelocation ? "yes" : "no"}</div>
          <h3 className="text-2xl font-semibold mt-3">
            Recruitment Process Steps
          </h3>
          <ul className="space-y-1 list-disc list-inside">
            {data?.recruitmentProcessSteps?.map(
              (skill: string, index: number) => <li key={index}>{skill}</li>
            )}
          </ul>
          <Separator className="my-4" />
          <h3 className="text-2xl font-semibold my-3">
            Considerations about the job (IA)
          </h3>
          <ul className="space-y-4 list-disc list-inside">
            {data?.considerations?.map(
              (consideration: string, index: number) => (
                <li key={index}>{consideration}</li>
              )
            )}
          </ul>
          <h3 className="text-2xl font-semibold my-3">Match Reasoning vs CV</h3>
          <ul className="space-y-4 list-disc list-inside">
            {data?.matchReasoningKeyPoints?.map(
              (matchReasoningKeyPoint: string, index: number) => (
                <li key={index}>{matchReasoningKeyPoint}</li>
              )
            )}
          </ul>
          <div>Match %: {data?.matchPercentage}</div>
        </div>
      ) : (
        <div data-testid="no-data-job-check-container" className="mt-4">
          No data submitted yet
        </div>
      )}
    </>
  );
}
