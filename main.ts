import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

const blogSettings = {
  title: "Eser Ozvataf's Blog",
  author: "Eser Ozvataf",
  avatar: "https://avatars.githubusercontent.com/u/866558?v=4",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:eser@ozvataf.com" },
    { title: "GitHub", url: "https://github.com/eserozvataf" },
  ],
  middlewares: [],
};

if (import.meta.main) {
  blog(blogSettings);
}

export { blog, blogSettings };
