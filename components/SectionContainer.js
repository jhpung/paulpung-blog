import classnames from 'classnames'

export default function SectionContainer({ className, children }) {
  return (
    <div className={classnames('mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0', className)}>
      {children}
    </div>
  )
}
