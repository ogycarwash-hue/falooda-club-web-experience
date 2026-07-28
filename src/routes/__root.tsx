import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-display text-6xl font-medium tracking-tight text-ink">
          Nothing on the <em className="display-italic">menu here.</em>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-medium text-cream transition-transform hover:scale-[1.02]"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink">
          This page didn't load.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Try again in a moment or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-cream"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-hairline bg-transparent px-6 text-sm font-medium text-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#faf6ee" },
      { name: "author", content: "Falooda Club" },
      { property: "og:site_name", content: "Falooda Club" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Falooda Club — Faloodas, Juices & Broasted in Dubai" },
      { property: "og:title", content: "Falooda Club — Faloodas, Juices & Broasted in Dubai" },
      { name: "twitter:title", content: "Falooda Club — Faloodas, Juices & Broasted in Dubai" },
      { name: "description", content: "Falooda Club, Port Saeed Dubai. Faloodas, fresh juices, milkshakes and broasted chicken. Open daily 8 AM – 2 AM. Delivery on Talabat, Noon and Smiles." },
      { property: "og:description", content: "Falooda Club, Port Saeed Dubai. Faloodas, fresh juices, milkshakes and broasted chicken. Open daily 8 AM – 2 AM. Delivery on Talabat, Noon and Smiles." },
      { name: "twitter:description", content: "Falooda Club, Port Saeed Dubai. Faloodas, fresh juices, milkshakes and broasted chicken. Open daily 8 AM – 2 AM. Delivery on Talabat, Noon and Smiles." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/2291700d-cdf8-4420-b5ca-21c951fe068b" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/2291700d-cdf8-4420-b5ca-21c951fe068b" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500;1,9..144,600&family=Inter+Tight:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
