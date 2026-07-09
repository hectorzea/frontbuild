type SkipLinkProps = {
  href: string;
  children: React.ReactNode;
};
const SkipLink = ({ href, children }: SkipLinkProps) => {
  return (
    <a
      href={href}
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-50
        focus:rounded-md focus:bg-primary focus:px-4 focus:py-2
        focus:text-primary-foreground focus:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      "
    >
      {children}
    </a>
  );
};

export default SkipLink;
