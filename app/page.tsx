import { URL } from "./src/constants/url";
import { NavLink } from "./src/ui/NavLink";
import { BrandTitle } from "./src/ui/Typography/BrandTitle";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <BrandTitle>Cleo</BrandTitle>

      <div className="flex flex-col gap-2 items-center justify-center">
        <NavLink href={URL.MONTHLY_PLANNER}>
          Planeje o básico
        </NavLink>
        <NavLink href={URL.MONTHLY_PLANNER}>
          Sobre
        </NavLink>
      </div>
    </div>
  );
}
