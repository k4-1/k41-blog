import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "v2022-03-07",
  dataset: "production",
  projectId: "j399a2ko",
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}