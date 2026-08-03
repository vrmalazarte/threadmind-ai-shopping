import Link from "next/link";

const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products",
  },
  {
    label: "AI Stylist",
    href: "/ai",
  },
];

export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                >
                {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}