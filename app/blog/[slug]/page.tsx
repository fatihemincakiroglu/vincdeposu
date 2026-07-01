import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, allPosts } from "../posts-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Vinç Deposu" },
    datePublished: post.date,
    keywords: post.tags.join(", "),
  };

  const digerYazilar = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/blog?kategori=${encodeURIComponent(post.category)}`}
            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5"
            style={{ background: (post.categoryColor ?? "#F59E0B") + "30", color: post.categoryColor ?? "#F59E0B" }}
          >
            {post.image} {post.category}
          </Link>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} okuma</span>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-xl leading-relaxed font-medium mb-8">{post.excerpt}</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-gray-700 leading-relaxed mb-10">
            Bu yazının tam içeriği şu anda ekibimiz tarafından hazırlanmaktadır. Konuyla ilgili
            hemen bilgi almak isterseniz, uzmanlarımızı arayabilir veya aşağıdaki ilgili
            hizmet sayfalarımızı inceleyebilirsiniz.
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl text-center transition"
            >
              📞 0532 303 90 89 — Uzmanla Görüş
            </a>
            <Link
              href="/iletisim"
              className="border border-gray-200 hover:border-yellow-400 text-gray-700 font-bold px-6 py-3 rounded-xl text-center transition"
            >
              Teklif Alın
            </Link>
          </div>
        </div>
      </section>

      {/* Diğer Yazılar */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Diğer Yazılar</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {digerYazilar.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
              >
                <div className="text-2xl mb-3">{p.image}</div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-gray-500 text-xs">{p.readTime} okuma</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="text-yellow-600 font-semibold hover:underline">
              ← Tüm yazılara dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
