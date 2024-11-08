import Link from "next/link";

type LinkProps = {
  label: string;
  href: string | URL;
}

const links: LinkProps[] = [
  { label: 'Início', href: '/' },
  { label: 'Planejador mensal', href: '/planejador-mensal' },
];

const Navlink = ({ link }: { link: LinkProps }) => {
  return (
    <Link href={link.href}>
      <div className="p-2 px-4 hover:py-4 hover:bg-dark-light hover:underline duration-200">
        {link.label}
      </div>
    </Link>
  )
}

export function Sidenav() {
  return (
    <nav className="h-screen min-w-60 py-4 flex flex-col items-center bg-dark-medium">
      <Link href={'/'}>
        <h2 className="text-4xl text-center font-semibold font-['Papyrus'] text-yellow-500">
          Cleo
        </h2>
      </Link>

      <div className="w-full mt-4 flex flex-col gap-2">
        {
          links.map(link => <Navlink key={link.label} link={link} />)
        }
      </div>
    </nav>
  )
}