import { FC } from 'react'

interface Props {
  settingsJson: string
}

const CodeBlock: FC<Props> = (props) => {
  const isLoading = props.settingsJson === ''

  return (
    <>
      <div
        className={`${isLoading ? 'hidden' : ''} text-md mx-auto whitespace-pre-wrap sm:text-lg md:text-xl`}
        dangerouslySetInnerHTML={{ __html: props.settingsJson }}
      ></div>
      <div className={isLoading ? '' : 'hidden'}>
        <pre className="shiki"></pre>
      </div>
    </>
  )
}

export default CodeBlock
