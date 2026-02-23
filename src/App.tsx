/**
 * App entry - Landing page for cosplayfans.ai/lp/hentai/1
 * Serves the same content at / and /lp/hentai/1 for dev/standalone mode.
 * When integrated, parent app routes to this page at /lp/hentai/1.
 */
import { LandingPage } from "./components/LandingPage";

export default function App() {
  return <LandingPage />;
}
