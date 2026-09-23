import { notFound } from "next/navigation";
import { productCategories } from "@/data.js";
import CategoryPage from "@/sections/Category";
import MetallicGraniteSeries from "@/sections/Metallic_Granite_Series";

const QUARTZ_SINK_SLUG = "quartz-sink";

export function generateStaticParams() {
  return [
    ...Object.keys(productCategories).map((category) => ({ category })),
    { category: QUARTZ_SINK_SLUG },
  ];
}

export default async function ProductCategoryPage({ params }) {
  const { category } = await params;

  if (category === QUARTZ_SINK_SLUG) {
    return <MetallicGraniteSeries backHref="/products/kitchen-sinks" />;
  }

  const selected = productCategories[category];

  if (!selected) {
    notFound();
  }

  return (
    <CategoryPage
      title={selected.title}
      description={selected.description}
      image={selected.image}
      imageFolder={selected.imageFolder}
      data={selected.data}
      sizeSpecs={selected.sizeSpecs}
      backHref={selected.backHref}
    />
  );
}
