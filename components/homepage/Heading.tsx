import siteMetadata from '@/data/siteMetadata';

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      I'm <span>{siteMetadata.fullName}</span> - a dedicated <span>Fullstack Engineer</span>
      <span className="hidden">Ho Chi Minh, VN</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]"></span>
    </h1>
  );
};

export default Heading;
