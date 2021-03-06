import React from 'react'
import Image from 'next/image'
import nextjsLogo from '../../public/icons/nextjs.svg'
import nextjsLogoLight from '../../public/icons/nextjsLight.svg'
import reactLogo from '../../public/icons/react.svg'
import tailwindLogo from '../../public/icons/tailwindcss.svg'
import goLogo from '../../public/icons/gopher.svg'
import pgLogo from '../../public/icons/postgresql.svg'
import { useTheme } from 'next-themes'

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = ({}) => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <div className="mb-16 pt-4 grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-4 sm:ml-0 ml-12">
      {resolvedTheme === 'light' ? (
        <a
          href="https://www.nextjs.org"
          target="_blank"
          className=" rounded-md p-3 w-28 h-28 flex items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200"
        >
          <Image src={nextjsLogo} />
        </a>
      ) : (
        <a
          href="https://www.nextjs.org"
          target="_blank"
          className=" rounded-md p-3 w-28 h-28 flex items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200"
        >
          <Image src={nextjsLogoLight} />
        </a>
      )}
      <a
        href="https://reactjs.org/"
        target="_blank"
        className="  rounded-md p-3 w-28 h-28 flex items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200"
      >
        <Image src={reactLogo} />
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        className="  rounded-md p-3 w-28 h-28 flex items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200"
      >
        <Image src={tailwindLogo} />
      </a>
      <a
        href="https://go.dev/"
        target="_blank"
        className="  rounded-md p-3 w-28 h-28 flex items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200"
      >
        <Image src={goLogo} />
      </a>
      <a
        href="https://www.postgresql.org/"
        target="_blank"
        className=" rounded-md p-3 w-28 h-28 flex items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200"
      >
        <Image src={pgLogo} />
      </a>
    </div>
  )
}
export default TechStack
