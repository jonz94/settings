interface CodeBlockProps {
  settingsJson: string
}

const CodeBlock = (props: CodeBlockProps) => {
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
