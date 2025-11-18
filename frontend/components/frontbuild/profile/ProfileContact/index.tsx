import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function ProfileContact() {
  const t = useTranslations("HomePage.contact");
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl w-full">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          {t("title")}
        </h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t("subtitle")}
            </h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
            <Button
              asChild
              size={"lg"}
              data-testid={"download-cv-button"}
              className="mt-3"
            >
              <Link
                href={`/files/${t("cv")}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Downlod CV"
              >
                {t("cvLinkName")}
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 pt-8">
            <div>
              <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Email
              </h5>
              <a
                href="mailto:hello@example.com"
                className="text-lg hover:text-accent transition-colors flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                zea3471@gmail.com
              </a>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Social
              </h5>
              <div className="space-y-3">
                <a
                  href="https://github.com/hectorzea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hectorazea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} {t("about")}
          </p>
        </div>
      </div>
    </section>
  );
}
