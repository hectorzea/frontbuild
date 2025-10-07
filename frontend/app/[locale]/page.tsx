import { ProfileAbout } from "@/components/frontbuild/ProfileAbout";
import { ProfileContact } from "@/components/frontbuild/ProfileContact";
import { ProfileExperience } from "@/components/frontbuild/ProfileExperience";
import { ProfileHero } from "@/components/frontbuild/ProfileHero";
import { ProfileNavigation } from "@/components/frontbuild/ProfileNavigation";
import { ProfileProjects } from "@/components/frontbuild/ProfileProjects";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ProfileNavigation />
      <main className="lg:ml-64">
        <ProfileHero />
        <ProfileAbout />
        <ProfileExperience />
        <ProfileProjects />
        <ProfileContact />
      </main>
    </div>
  );
}
