import { URL } from "@/src/constants/url";
import { NavLink } from "@/src/ui/NavLink";
// import { BrandTitle } from "@/src/ui/Typography/BrandTitle";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-['Papyrus'] text-secondary">Cleo</h1>

      <div className="flex flex-col gap-2 items-center justify-center">
        <NavLink href={URL.MONTHLY_PLANNER}>
          Planeje o básico
        </NavLink>
      </div>
    </div>
  );
}
