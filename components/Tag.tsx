import Link from 'next/link';
import { kebabCase } from 'pliny/utils/kebabCase';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-lg font-medium  text-primary hover:text-sky-600 dark:hover:text-sky-400"
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export default Tag;
