'use client'

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { SafeUser } from '~/app/types'

interface NavbarProps {
	currentUser?: SafeUser | null
}

export default function Navbar({ currentUser }: NavbarProps) {
	console.log({ currentUser })
	return (
		<div className='fixed z-10 w-full bg-white shadow-sm'>
			<div className='py-4 border-b'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
		</div>
	)
}
