import { FC } from 'react'

interface Props {
  settingsJson: string
}

const CodeBlock: FC<Props> = (props) => {
  const isLoading = props.settingsJson === ''

  return (
    <>
      <div
        className={`${
          isLoading ? 'hidden' : ''
        } mx-auto text-md sm:text-lg md:text-xl whitespace-pre-wrap`}
        dangerouslySetInnerHTML={{ __html: props.settingsJson }}
      ></div>
      <div className={isLoading ? '' : 'hidden'}>
        <pre className="shiki"></pre>
      </div>
    </>
  )
}

export default CodeBlock
