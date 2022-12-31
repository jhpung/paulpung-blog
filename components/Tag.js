import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      className="mr-3 text-sm font-medium uppercase text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
      href={`/tags/${kebabCase(text)}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
