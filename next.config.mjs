import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from "next-intl/plugin";

//todo diferentes cloudfront de images?
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d15f34w2p8l1cc.cloudfront.net",
        port: "",
        pathname: "/hearthstone/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "art.hearthstonejson.com",
        port: "",
        search: "",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withPayload(nextConfig));
  