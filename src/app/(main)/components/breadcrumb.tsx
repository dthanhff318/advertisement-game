import Head from "next/head";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };
  return (
    <nav aria-label="breadcrumb" className="bg-gray-100 py-3 px-4 rounded">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.active ? (
              <span className="text-gray-500 font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href || "#"}>
                <span className="text-blue-600 hover:underline">
                  {item.label}
                </span>
              </Link>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

export const generateMetadata = () => {
  return {
    title: "Breadcrumb",
    description: "Block blast schema",
    openGraph: {
      title: "Breadcrumb Blockblast",
    },
    other: {
      script: [
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "HOME",
                item: "https://example.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "BLOCK BLAST",
                item: "https://example.com/products",
              },
            ],
          }),
        },
      ],
    },
  };
};
