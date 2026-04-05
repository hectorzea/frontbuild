import { Button } from "@/components/ui/button";

interface JobSearchErrorProps {
  cleanErrors: () => void;
}

const JobSearchError = ({ cleanErrors }: JobSearchErrorProps) => {
  return (
    <div className="flex flex-col gap-3.5">
      <p>An error has ocurred, do the call again </p>
      <Button size={"sm"} onClick={cleanErrors} data-testid="retry-job-posting">
        Retry
      </Button>
    </div>
  );
};

export default JobSearchError;
