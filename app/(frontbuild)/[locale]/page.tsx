import { ProfileAbout } from "@/components/frontbuild/profile/ProfileAbout";
import { ProfileContact } from "@/components/frontbuild/profile/ProfileContact";
import { ProfileExperience } from "@/components/frontbuild/profile/ProfileExperience";
import { ProfileHero } from "@/components/frontbuild/profile/ProfileHero";
import { ProfileNavigation } from "@/components/frontbuild/profile/ProfileNavigation";
import { ProfileProjects } from "@/components/frontbuild/profile/ProfileProjects";

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
