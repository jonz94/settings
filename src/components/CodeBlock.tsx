import { FC } from 'react'

interface Props {
  settingsJson: string
}

const CodeBlock: FC<Props> = (props) => {
  const isLoading = props.settingsJson === ''

  return (
    <>
      {/* loading */}
      <div className={`${isLoading ? '' : 'hidden'} mx-auto`}>
        <pre className="shiki"></pre>
      </div>

      {/* data loaded */}
      <div
        className={`${isLoading ? 'hidden' : ''} mx-auto whitespace-pre-wrap text-base sm:text-lg md:text-xl`}
        dangerouslySetInnerHTML={{ __html: props.settingsJson }}
      ></div>
    </>
  )
}

export default CodeBlock
