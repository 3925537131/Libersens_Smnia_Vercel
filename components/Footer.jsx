import Link from "next/link";
import Mark from "./Mark";

const COLS = [
  {
    head: "Explore",
    links: [
      { label: "Love Machine", href: "/products/model-l" },
      { label: "Shop", href: "/shop" },
      { label: "Encounters", href: "/stories" },
      { label: "Stories", href: "/stories" },
    ],
  },
  {
    head: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Press", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
  {
    head: "Social",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "X", href: "https://x.com" },
      { label: "YouTube", href: "https://youtube.com" },
    ],
  },
  {
    head: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/about" },
      { label: "Privacy & Cookies", href: "/about" },
      { label: "Investor Relations", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <Mark className="footer__mark" />
          </div>
          <div className="footer__cols">
            {COLS.map((col) => (
              <div className="footer__col" key={col.head}>
                <span className="head">{col.head}</span>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href}>{l.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Libersens</span>
          <span>Desire, engineered.</span>
        </div>
      </div>
    </footer>
  );
}
