import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)]  | order(_createdAt desc) {
  _id, 
  title,
  slug,
  author -> {
    _id, image, bio
  },
  _createdAt,
  views, 
  description,
  category,
  image
}`);
