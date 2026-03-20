import type { Metadata } from "next";

import { HomeV2Page } from "@/components/home-v2/HomeV2Page";

export const metadata: Metadata = {
  title: "WEB Marketing | Web rješenja, e-commerce i razvoj funkcionalnosti po mjeri",
  description:
    "Razvijamo web rješenja, e-commerce sustave i funkcionalnosti po mjeri na vlastitom EasyEdit CMS-u. Zatražite besplatnu početnu analizu projekta.",
};

export default function Home() {
  return <HomeV2Page />;
}
