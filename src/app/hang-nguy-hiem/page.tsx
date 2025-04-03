"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type ContentSection =
  | {
      type: "list";
      title: string;
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
    }
  | {
      type: "paragraph";
      content: string;
    };

interface BlogContent {
  image1: {
    src: string;
    alt: string;
  };
  sections: ContentSection[];
}

interface RelatedPost {
  title: string;
  link: string;
  image: string;
}

const BlogPost = () => {
  const { t } = useTranslation();

  const renderContentSection = (section: ContentSection, index: number) => {
    switch (section.type) {
      case "list":
        return (
          <div key={index} className="mt-4">
            <ol className="list-decimal pl-6 text-lg font-semibold">
              <li>{section.title}</li>
            </ol>
            {section.items.map((item, i) => (
              <p key={i} className="text-base mt-2 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        );
      case "image":
        return (
          <div key={index} className="mt-4">
            <Image
              src={section.src}
              alt={section.alt}
              width={section.width || 850}
              height={section.height || 442}
              className="rounded-lg shadow-md"
              priority={index === 0}
            />
          </div>
        );
      case "paragraph":
        return (
          <p key={index} className="text-base mt-4 leading-relaxed">
            {section.content}
          </p>
        );
      default:
        return null;
    }
  };

  // Get content data with type safety
  const content = t("blog.content", { returnObjects: true }) as BlogContent;
  const {sections } = content;

  // Get sidebar data
  const sidebarTitle = t("blog.sidebar.title");
  const relatedPosts = t("blog.sidebar.posts", { returnObjects: true }) as RelatedPost[];

  // Get header data
  const categoryLink = t("blog.categoryLink");
  const category = t("blog.category");
  const title = t("blog.title");

  return (
    <main className="pt-20 pb-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <header className="bg-blue-50 py-8 px-6 text-center">
                <h6 className="text-xs text-gray-500 mb-2">
                  <Link
                    href={categoryLink}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {category}
                  </Link>
                </h6>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {title}
                </h1>
                <div className="border-t border-gray-300 w-24 mx-auto"></div>
              </header>

              <div className="p-6">
                <Image
                  src={t("blog.content.image1.src")}
                  alt={t("blog.content.image1.alt")}
                  width={850}
                  height={442}
                  className="rounded-lg shadow-md w-full"
                  priority
                />

                <div className="mt-6 space-y-6">
                  {sections.map((section, index) =>
                    renderContentSection(section, index)
                  )}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sidebarTitle}
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.link}
                    className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition"
                  >
                    <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">
                      {post.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;