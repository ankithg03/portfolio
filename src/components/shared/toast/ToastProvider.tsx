"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Portal } from "@src/components/shared/portal";
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

type ToastStatus = "success" | "error" | "info";
type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center";

export interface ToastOptions {
  id?: string;
  status?: ToastStatus;
  position?: ToastPosition;
  duration?: number; // ms
}

interface ToastItem extends Required<ToastOptions> {
  message: string;
}

interface ToastContextValue {
  show: (message: string, options?: ToastOptions) => string;
  success: (message: string, options?: Omit<ToastOptions, "status">) => string;
  error: (message: string, options?: Omit<ToastOptions, "status">) => string;
  info: (message: string, options?: Omit<ToastOptions, "status">) => string;
  close: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

const defaults: Required<Omit<ToastOptions, "id">> = {
  status: "info",
  position: "top-center",
  duration: 3500,
};

const positionStyle: Record<ToastPosition, string> = {
  "top-left": "top-4 md:top-24 left-4 items-start",
  "top-right": "top-4 md:top-24 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-right": "bottom-4 right-4 items-end",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
};

const statusStyles: Record<
  ToastStatus,
  { icon: React.ReactNode; accent: string }
> = {
  success: {
    icon: <CheckCircleIcon className="h-5 w-5 text-emerald-400" />,
    accent: "bg-emerald-400",
  },
  error: {
    icon: <XCircleIcon className="h-5 w-5 text-rose-400" />,
    accent: "bg-rose-400",
  },
  info: {
    icon: <InformationCircleIcon className="h-5 w-5 text-indigo-400" />,
    accent: "bg-indigo-400",
  },
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Record<string, number | ReturnType<typeof setTimeout>>>(
    {},
  );

  const close = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timers.current[id]) {
      clearTimeout(timers.current[id] as number);
      delete timers.current[id];
    }
  }, []);

  const show = useCallback(
    (message: string, options?: ToastOptions) => {
      const id = options?.id ?? Math.random().toString(36).slice(2);
      const item: ToastItem = {
        id,
        message,
        status: options?.status ?? defaults.status,
        position: options?.position ?? defaults.position,
        duration: options?.duration ?? defaults.duration,
      };

      setToasts((prev) => [...prev, item]);
      timers.current[id] = window.setTimeout(() => close(id), item.duration);
      return id;
    },
    [close],
  );

  const success = useCallback(
    (m: string, o?: Omit<ToastOptions, "status">) =>
      show(m, { ...o, status: "success" }),
    [show],
  );
  const error = useCallback(
    (m: string, o?: Omit<ToastOptions, "status">) =>
      show(m, { ...o, status: "error" }),
    [show],
  );
  const info = useCallback(
    (m: string, o?: Omit<ToastOptions, "status">) =>
      show(m, { ...o, status: "info" }),
    [show],
  );

  const value = useMemo<ToastContextValue>(
    () => ({ show, success, error, info, close }),
    [show, success, error, info, close],
  );

  const groups = useMemo(() => {
    const map: Record<ToastPosition, ToastItem[]> = {
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-right": [],
      "top-center": [],
    };
    for (const t of toasts) map[t.position].push(t);
    return map;
  }, [toasts]);

  const closeTopOf = useCallback(
    (pos: ToastPosition) => {
      const list = groups[pos];
      if (!list || list.length === 0) return;
      close(list[0].id);
    },
    [groups, close],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Portal>
        {Object.entries(groups).map(([pos, list]) => {
          const position = pos as ToastPosition;
          const hasToasts = list.length > 0;
          return (
            <div
              key={pos}
              className={`fixed z-[9999] flex flex-col ${positionStyle[position]} pointer-events-none border-[6px] border-black/30  md:border-white/50 rounded-full`}
            >
              <AnimatePresence>
                {hasToasts && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                    }}
                    className="pointer-events-auto rounded-full shadow-2xl ring-1 ring-white/10 backdrop-blur-md bg-black/55 md:bg-black/20"
                    style={{ overflow: "hidden" }}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 min-w-[220px] max-w-[420px]">
                      {/* Left: icon */}
                      <div className="flex-shrink-0">
                        {statusStyles[list[0].status].icon}
                      </div>

                      {/* Center: main toast */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">
                          {list[0].message}
                        </div>
                        {/* Progress bar */}
                        <motion.div
                          key={list[0].id + "-progress"}
                          initial={{ scaleX: 1 }}
                          animate={{ scaleX: 0 }}
                          transition={{
                            duration: list[0].duration / 1000,
                            ease: "linear",
                          }}
                          style={{ transformOrigin: "left" }}
                          className={`h-1 ${statusStyles[list[0].status].accent} rounded-full mt-2`}
                        />
                      </div>

                      {/* Right: controls */}
                      <div className="ml-auto flex items-center gap-2">
                        {list.length > 1 && (
                          <div className="hidden sm:inline-flex items-center justify-center h-6 px-2 text-xs font-medium text-white/80 bg-white/10 rounded-full">
                            +{list.length - 1}
                          </div>
                        )}
                        <button
                          onClick={() => closeTopOf(position)}
                          aria-label="Close"
                          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                        >
                          <XMarkIcon className="h-4 w-4 text-white/90" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Portal>
    </ToastContext.Provider>
  );
};
