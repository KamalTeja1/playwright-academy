import Link from "next/link";
import { Compass, House } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-blue-25 flex items-center justify-center text-[#007AC3] mx-auto mb-5">
          <Compass size={40} weight="duotone" />
        </div>
        <div className="text-[64px] font-extrabold text-ink-900 leading-none mb-3">
          404
        </div>
        <h1 className="text-[19px] font-extrabold text-ink-900 mb-2">
          Aiyo, this page is not here
        </h1>
        <p className="text-ink-600 mb-6">
          The link might be broken, or the page moved somewhere else.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-white font-semibold text-[13.5px]"
          style={{
            background: "linear-gradient(120deg, #007AC3, #409BD2)",
            boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
          }}
        >
          <House size={16} weight="duotone" />
          Back home
        </Link>
      </div>
    </div>
  );
}