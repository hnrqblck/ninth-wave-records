import Logo from '../../assets/logo-header.png';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <section className=''>
            <header className='flex items-center justify-between pt-4 nw-green '>
                <img src={Logo} alt='Ninth Wave Records logo' className='h-24 self-end relative bottom-[-1px]'/>
                <div className='flex-grow mx-4 max-w-200 '>
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-full h-8 p-2 rounded bg-white'
                    />

                </div>
                <div className='flex space-x-4 mr-4'>
                    <a href='#'>
                        <UserIcon className=' fill-white size-7' />
                    </a>
                    <a href='#'>
                        <ShoppingBagIcon className='fill-white size-7'/>
                    </a>
                </div>
            </header>
            <nav className='flex justify-center space-x-12 p-2 nw-blue'>
                <a href='#' className='text-white'>Sale</a>
                <a href='#' className='text-white'>New Releases</a>
                <a href='#' className='text-white'>Pop</a>
                <a href='#' className='text-white'>Rap</a>
                <a href='#' className='text-white'>R&B</a>
                <a href='#' className='text-white'>Jazz</a>
            </nav>
        </section>
    )
}

export default Header;