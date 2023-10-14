import Config from "@/Config";
import useGlobalStore from "@/store/globalStore";
import { useLayoutEffect, useState } from "react";

export default function useHasAuth() {
  const token = localStorage.getItem(Config.AuthTokenName);

  return Boolean(token);
}
