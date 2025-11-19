
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 font-sans">
      <div className="relative max-w-4xl w-full mx-4 lg:mx-0">
        <div className="absolute -right-20 -top-20 hidden md:block">
          <svg width="260" height="260" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10 dark:opacity-20">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path fill="url(#g1)" d="M44.8,-68.6C58.2,-59,68.6,-48.3,75.7,-35.3C82.8,-22.2,86.7,-7.1,84.3,7.1C82,21.3,73.3,34.6,62.4,45.8C51.5,57,38.4,66.1,23.3,70.9C8.2,75.7,-8.9,76.2,-24.6,72.2C-40.3,68.2,-54.5,59.7,-64.8,47.8C-75.1,35.9,-81.6,20.6,-83.2,4.2C-84.8,-12.2,-81.6,-29.7,-72.9,-43.5C-64.2,-57.3,-50,-67.5,-34.1,-74.1C-18.2,-80.7,-9.1,-83.7,3.9,-89.1C16.9,-94.6,33.8,-102.2,44.8,-68.6Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative dark:bg-zinc-900/60 p-8 md:p-12 ">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-100">
                Build beautiful products faster
                <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">with modern Next.js</span>
              </h1>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-xl">
                A tiny demo storefront to explore fetching, routing, and UI patterns. Browse products, preview details, and see how Next.js + Tailwind make fast interfaces simple.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link 
                  href="/products" 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 gap-2"
                >
                  View Products
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a href="#features" className="inline-flex items-center px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Learn more
                </a>
              </div>

              <ul id="features" className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-200">Fast client & server rendering</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M3 3h14v2H3V3zM3 8h14v2H3V8zM3 13h9v2H3v-2z" />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-200">Simple, composable UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9h4v2H8V9z" />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-200">Accessible & responsive</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-72 lg:w-96">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-sky-50 to-violet-50 dark:from-zinc-800 dark:to-zinc-900 p-4 border border-zinc-100 dark:border-zinc-800">
                {/* <img src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387" alt="Products preview" className="w-full h-48 object-cover rounded-md shadow-sm" /> */}
                <Image
                  src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
                  alt="Products preview"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md shadow-sm"
                />
                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Featured collection</h3>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Handpicked items to get you started.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400 text-center">
            Built with Next.js · Tailwind CSS · Accessible components
          </p>
        </div>
      </div>
    </div>
  );
}
