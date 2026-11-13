// components/frontbuild/JobOfferStatusBanner/index.tsx
import { JobApplicationResponse, JobStatus } from "@/app/(job-offer-ai)/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  Loader2,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";

interface StatusConfig {
  label: string;
  title: string;
  description: string;
  badgeClassName: string;
  dotColorClass: string;
  icon: React.ReactNode;
}

const STATUS_CONFIG: Record<JobStatus, StatusConfig> = {
  PENDING: {
    label: "PENDING",
    title: "En cola de espera",
    description:
      "La solicitud fue creada y está esperando un worker disponible para iniciar.",
    badgeClassName: "bg-amber-500/15 text-amber-500 border-amber-500/30",
    dotColorClass: "bg-amber-500",
    icon: <Clock className="h-6 w-6 animate-pulse text-amber-500" />,
  },
  SCRAPING: {
    label: "SCRAPING",
    title: "Extrayendo datos de LinkedIn",
    description:
      "Navegando a la oferta laboral para extraer el puesto, empresa y requisitos...",
    badgeClassName: "bg-sky-500/15 text-sky-500 border-sky-500/30",
    dotColorClass: "bg-sky-500",
    icon: <Globe className="h-6 w-6 animate-bounce text-sky-500" />,
  },
  ANALYZING: {
    label: "ANALYZING",
    title: "Analizando compatibilidad con IA",
    description:
      "Gemini está contrastando los requisitos extraídos de la oferta contra tu CV...",
    badgeClassName: "bg-violet-500/15 text-violet-500 border-violet-500/30",
    dotColorClass: "bg-violet-500",
    icon: <Sparkles className="h-6 w-6 animate-pulse text-violet-500" />,
  },
  COMPLETED: {
    label: "COMPLETED",
    title: "Análisis completado",
    description: "El reporte de compatibilidad está listo.",
    badgeClassName: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
    dotColorClass: "bg-emerald-500",
    icon: <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />,
  },
  FAILED: {
    label: "FAILED",
    title: "Falló el procesamiento de la oferta",
    description: "Ocurrió un problema durante la extracción o el análisis.",
    badgeClassName: "bg-destructive/15 text-destructive border-destructive/30",
    dotColorClass: "bg-destructive",
    icon: <XCircle className="h-5 w-5 text-destructive shrink-0" />,
  },
};

interface JobOfferStatusBannerProps {
  job: JobApplicationResponse;
  onRetry?: (id: string) => void;
}

export function JobOfferStatusBanner({
  job,
  onRetry,
}: JobOfferStatusBannerProps) {
  const config = STATUS_CONFIG[job.status];
  const isCompleted = job.status === "COMPLETED";
  const isFailed = job.status === "FAILED";
  const isRunning = !isCompleted && !isFailed;
  const shortId = job._id ? job._id.slice(-6) : "------";

  return (
    <div
      data-testid="job-offer-status-container"
      className="w-full max-w-3xl space-y-6"
    >
      {/* 1. Banner Compacto Superior */}
      <Card>
        <CardContent className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3 min-w-0">
            {isRunning ? (
              <span className="relative flex h-3 w-3 shrink-0">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${config.dotColorClass}`}
                />
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ${config.dotColorClass}`}
                />
              </span>
            ) : (
              config.icon
            )}

            <div className="min-w-0">
              <p
                data-testid="job-offer-short-id"
                className="text-sm font-semibold leading-none"
              >
                Job #{shortId}
              </p>
              <a
                href={job.jobLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground max-w-xs sm:max-w-md truncate"
              >
                <span className="truncate">{job.jobLink}</span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
            </div>
          </div>

          <Badge
            data-testid="job-offer-status-badge"
            variant="outline"
            className={`gap-1.5 ${config.badgeClassName}`}
          >
            {isRunning && <Loader2 className="h-3 w-3 animate-spin" />}
            {config.label}
          </Badge>
        </CardContent>
      </Card>

      <Separator />

      {/* 2. Área Inferior Condicional según el Estado */}
      {isCompleted ? (
        <Card data-testid="job-offer-completed-placeholder">
          <CardContent className="py-10 text-center space-y-2">
            {/* TODO: Reemplazar más adelante por el componente final con job.aiResult */}
            <p className="text-base font-medium">
              {job.aiResult?.jobTitle ?? "Análisis finalizado"}
            </p>
            <p className="text-sm text-muted-foreground">
              Aquí se mostrará el componente detallado del resultado para{" "}
              <strong className="text-foreground">
                {job.aiResult?.companyName ?? "la empresa"}
              </strong>
              .
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card
          data-testid="job-offer-non-completed-card"
          className="border-dashed"
        >
          <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              {config.icon}
            </div>

            <div className="space-y-1 max-w-md">
              <p
                data-testid="job-offer-state-title"
                className="text-base font-medium text-foreground"
              >
                {config.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {isFailed
                  ? job.lastError ||
                    "No se pudo completar el proceso. Intenta nuevamente."
                  : config.description}
              </p>
            </div>

            {isFailed && onRetry && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onRetry(job._id)}
                data-testid="job-offer-retry-button"
                className="mt-2"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reintentar
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
