import Image from 'next/image'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="footer footer-center bg-base-300 p-4 text-base-content">
      <div>
        <p className="flex space-x-[1ch]">
          <span>Built with</span>
          <span className="relative top-1">
            <Image src="/noto-emoji-u2764.png" height={16} width={16} alt="♥" priority />
          </span>
          <span>by jonz94</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
