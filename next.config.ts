import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

//todo diferentes cloudfront de images?
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d15f34w2p8l1cc.cloudfront.net",
        port: "",
        pathname: "/hearthstone/**",
        search: "",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
