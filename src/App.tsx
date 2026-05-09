/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
