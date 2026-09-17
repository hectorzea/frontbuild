"use client";
import type { AppStore } from "@/lib/store";
import { setupStore } from "@/lib/store";
import type { ReactNode } from "react";
import { useState } from "react";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const [store] = useState<AppStore>(setupStore);
  return <Provider store={store}>{children}</Provider>;
};
