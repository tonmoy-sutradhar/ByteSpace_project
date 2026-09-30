import { redirect } from "next/navigation";
import { creator } from "@/app/config/creator";

export default function CreatorsPage() {
  redirect(`/creators/${creator.slug}`);
}
