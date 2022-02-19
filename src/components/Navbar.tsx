import Link from 'next/link'
import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="navbar rounded-box m-4 bg-neutral text-neutral-content shadow-lg">
      <div className="mx-2 flex-none px-2">
        <Link href="/">
          <a className="text-lg font-bold text-primary">Settings</a>
        </Link>
      </div>
      <div className="mx-2 flex-1 px-2">
        <div className="hidden items-stretch sm:flex">
          <Link href="/vscode">
            <a className="btn btn-ghost rounded-btn btn-sm">vscode</a>
          </Link>
          <Link href="/windows-terminal">
            <a className="btn btn-ghost rounded-btn btn-sm">windows terminal</a>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
        <button className="btn btn-ghost btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>

        <button className="btn btn-ghost btn-square flex sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
