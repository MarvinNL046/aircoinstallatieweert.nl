import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Airco Blog | 🔥 27 Tips & Tricks | Bespaar €500+/jaar",
  description: "GRATIS airco tips die €500+ besparen! ✓ Onderhoudsgidsen ✓ Energie hacks ✓ Storingscodes uitgelegd. Start met besparen vandaag →",
  keywords: [
    "airco blog",
    "klimaatbeheersing blog",
    "airconditioning tips",
    "energiebesparing airco",
    "airco onderhoud tips",
    "Limburg airco nieuws"
  ],
}

export default function BlogPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <p className="mb-12 text-xl text-muted-foreground">
        Ontdek de laatste inzichten en tips over airconditioning en klimaatbeheersing
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("nl-NL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </div>
              <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Blog
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}