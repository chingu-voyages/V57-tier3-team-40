import React from 'react'
import logo  from "../assets/header/logo.png"
import { FaHome, FaDog, FaCat, FaHandHoldingHeart} from 'react-icons/fa'

export const headerLogo = logo

export type navLinkInfo = {
    title: string
    to: string
    icon: React.ReactNode
    dropDown?: DropDownItem[]
}

export type DropDownItem = {
    label: string
    path: string
}

export const navInfo: navLinkInfo[] = [
    { 
        title: 'Home', 
        to: '/', 
        icon: <FaHome />
    },
    { 
        title: 'Dogs', 
        to: '/animals',
        icon: <FaDog />, 
        dropDown: [
            { label: 'Adults', path: '/animals' },
            { label: 'Puppies', path: '/animals'}
        ] 
    },
    { 
        title: 'Cats', 
        to: '/animals',
        icon: <FaCat />, 
        dropDown: [
            { label: 'Adults', path: '/animals' },
            { label: 'Kittens', path: '/animals' }
        ] 
    },
    { 
        title: 'Adopt vs Foster', 
        to: '/adopt-vs-foster',
        icon: <FaHandHoldingHeart /> 
    }
]