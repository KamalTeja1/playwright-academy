"use client";

import { forwardRef } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
};

export const SearchBox = forwardRef<HTMLInputElement, Props>(
  function SearchBox({ value, onChange, placeholder, autoFocus }, ref) {
    return (
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none">
          <MagnifyingGlass size={20} weight="bold" />
        </div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Search topics, tags, content…"}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-4 rounded-[12px] border border-border bg-surface text-ink-900 text-[15px] font-medium outline-none transition-all placeholder:text-ink-400 focus:border-[#007AC3] focus:ring-4 focus:ring-[#007AC3]/10"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-ink-400 hover:text-ink-900 hover:bg-blue-25 transition-colors"
          >
            <X size={14} weight="bold" />
          </button>
        )}
      </div>
    );
  }
);