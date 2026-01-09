import { useEffect } from "react";

const SITE_URL = "https://edil-vulcano.it";
const DEFAULT_IMAGE = `${SITE_URL}/logo.webp`;

type SeoProps = {
  // Page title shown in browser tab and used for OG/Twitter.
  title: string;
  // Short summary for search snippets and social previews.
  description: string;
  // Canonical path (leading slash) for this route.
  path: string;
  // Optional absolute URL for social preview image.
  image?: string;
  // Set true for pages that should not be indexed (e.g. 404).
  noindex?: boolean;
  // Optional structured data payload for JSON-LD.
  jsonLd?: Record<string, unknown>;
};

// Ensure a meta tag exists (create if missing) and return it for updates.
const ensureMeta = (selector: string, createAttrs: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  return element;
};

// Ensure a link tag exists (e.g. canonical) and return it for updates.
const ensureLink = (rel: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  return element;
};

const Seo = ({ title, description, path, image, noindex = false, jsonLd }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const resolvedImage = image ?? DEFAULT_IMAGE;

    // Update document title for the current route.
    document.title = title;

    // Standard SEO meta tags.
    ensureMeta('meta[name="description"]', { name: "description" }).setAttribute("content", description);
    ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute("content", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph tags for rich previews (WhatsApp, Facebook, etc).
    ensureMeta('meta[property="og:type"]', { property: "og:type" }).setAttribute("content", "website");
    ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", canonicalUrl);
    ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", title);
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", description);
    ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", resolvedImage);
    ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).setAttribute("content", "it_IT");
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute("content", "Edil Vulcano");

    // Twitter Card tags for preview on X/Twitter.
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute("content", "summary_large_image");
    ensureMeta('meta[name="twitter:url"]', { name: "twitter:url" }).setAttribute("content", canonicalUrl);
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", title);
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", description);
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", resolvedImage);

    // Canonical link to avoid duplicate URL indexing.
    ensureLink("canonical").setAttribute("href", canonicalUrl);

    // Optional JSON-LD structured data for rich results.
    const jsonLdId = "seo-jsonld";
    const existingJsonLd = document.head.querySelector<HTMLScriptElement>(`script#${jsonLdId}`);
    if (jsonLd) {
      const jsonScript = existingJsonLd ?? document.createElement("script");
      jsonScript.id = jsonLdId;
      jsonScript.type = "application/ld+json";
      // Replace the content on each route change to keep it in sync.
      jsonScript.text = JSON.stringify(jsonLd);
      if (!existingJsonLd) {
        document.head.appendChild(jsonScript);
      }
    } else if (existingJsonLd) {
      // Remove stale JSON-LD if the page doesn't define it.
      existingJsonLd.remove();
    }
  }, [description, image, jsonLd, noindex, path, title]);

  // This component only mutates document head.
  return null;
};

export default Seo;
