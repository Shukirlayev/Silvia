/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ScrollProgress } from "./components/ScrollProgress";

const Features = lazy(() => import("./components/Features").then(m => ({ default: m.Features })));
const HowItWorks = lazy(() => import("./components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-white/20">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="h-40 min-h-[50vh]" />}>
        <Features />
        <HowItWorks />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
