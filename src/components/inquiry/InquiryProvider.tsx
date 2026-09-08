"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export interface InquiryLine {
  product: string;
  quantity: string;
}

const KEY = "ck-inquiry-cart";

interface InquiryCtx {
  lines: InquiryLine[];
  count: number;
  add: (line: InquiryLine) => void;
  remove: (product: string) => void;
  clear: () => void;
}

const Ctx = createContext<InquiryCtx | null>(null);

function loadInitial(): InquiryLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as InquiryLine[]) : [];
  } catch {
    return [];
  }
}

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<InquiryLine[]>(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((line: InquiryLine) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.product === line.product);
      if (i >= 0) {
        const next = [...prev];
        next[i] = line;
        return next;
      }
      return [...prev, line];
    });
  }, []);

  const remove = useCallback((product: string) => {
    setLines((prev) => prev.filter((l) => l.product !== product));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(
    () => ({ lines, count: lines.length, add, remove, clear }),
    [lines, add, remove, clear],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useInquiry(): InquiryCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
