import logo  from "../assets/header/logo.png"

export const headerLogo = logo

export type navLinkInfo = {
    title: string
    to: string

}

export const navInfo: navLinkInfo[] = [
    { title: 'Home', to: '/' },
    { title: 'Dogs', to: '/animals' },
    { title: 'Cats', to: '/animals' },
    { title: 'Adopt vs Foster', to: '/adopt-vs-foster' }
]