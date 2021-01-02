import Logo from './assets/vercel.svg'
import Link from 'next/link'


export const Header = ({ children }) => (
    <nav className="bg-green-700">
        <div className="h-20 max-w-6xl mx-auto">
            <div className="flex items-center justify-between flex-wrap p-6 px-0">
                {/* Logo */}
                <div className="flex items-center flex-no-shrink mr-6">
                    <Link href="/">
                        <Logo fill="white"></Logo>
                    </Link>
                </div>

                {/* Menu Button */}
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                {/* Elements */}
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">

                        <Link href="/">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4">
                                HomePage
                 </a>
                        </Link>
                        <Link href="/test-page">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-red-500 mr-4">
                                Test
                 </a>
                        </Link>
                        <Link href="/long-text">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-red-500 mr-4">
                                Long Text
                 </a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </nav >
)