import { notFound } from "next/navigation";
import { bathroomAccessories } from "@/data.js";
import AccessoryCategoryPage from "@/sections/AccessoryCategory";

export function generateStaticParams() {
  return Object.keys(bathroomAccessories).map((subcategory) => ({
    subcategory,
  }));
}

export default async function BathroomAccessorySubcategoryPage({ params }) {
  const { subcategory } = await params;
  const selected = bathroomAccessories[subcategory];

  if (!selected) {
    notFound();
  }

  return (
    <AccessoryCategoryPage
      title={selected.title}
      description={selected.description}
      image={selected.image}
      items={selected.items}
    />
  );
}
