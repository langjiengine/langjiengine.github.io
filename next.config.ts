const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = isGitHubPages
  ? {
      output: "export" as const,
    }
  : {};

export default nextConfig;
