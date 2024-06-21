"use client"  // This is a client component instead of server component(which is the default)
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Image src= '/assets/images/logo-text.png' alt='logo'
                 width={180} height={28} />
            </Link>


            {/* adding the navbars for the first 6 links */}
            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(0,6).map((link) =>{
                            const isActive = link.route === pathname

                            return(
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white": "text-gray-500"}`}>
                                    <Link className='sidebar-link flex items-center gap-2' href={link.route}>
                                        <Image
                                            src={link.icon} 
                                            alt= "logo"
                                            width={20} height={20}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(6).map((link) =>{
                                const isActive = link.route === pathname

                            return(
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white": "text-gray-500"}`}>
                                    <Link className='sidebar-link flex items-center gap-2' href={link.route}>
                                        <Image
                                            src={link.icon} 
                                            alt= "logo"
                                            width={20} height={20}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        
                        <li className='flex-center cursor-pointer gap-2 p-4'>
                            <UserButton afterSignOutUrl='/' showName/>
                        </li>
                    </ul>
                
                </SignedIn>

                {/* FOR SIGNED OUT */}
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                </SignedOut>

            </nav>
        </div>
    </aside>

  )
}

export default Sidebar