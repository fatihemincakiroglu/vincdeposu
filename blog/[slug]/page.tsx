import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-black text-gray-900 mb-6">{slug}</h1>
      <p className="text-gray-500">Blog içeriği yakında eklenecek.</p>
    </div>
  );
}