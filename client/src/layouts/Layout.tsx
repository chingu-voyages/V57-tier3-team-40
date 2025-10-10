import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout: FC = () => {
    return (
        <div className="mx-auto w-full flex flex-col bg-[#F5F5F5]">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout