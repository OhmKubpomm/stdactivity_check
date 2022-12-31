import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
	Box,
	Button,
	Grid,
	Heading,
	VStack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	chakra,
} from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'

const providers = [
	
	{
		name: 'google',
		Icon: BsGoogle,
	},
]

const Signin = () => {
	const { data: session, status } = useSession()
	const { push } = useRouter()
	const [username, setusername] = useState('')

	console.log(session)
	if (status === 'loading') return <Heading>Checking Authentication...</Heading>

	if (session) {
		setTimeout(() => {
			push('/')
		}, 5000)

		return <Heading>you are already signed in</Heading>
	}

	const handleOAuthSignIn = (provider) => () => signIn(provider)
	const handleSubmit = (e) => {
		e.preventDefault()

		if (!username) return false

		signIn('username', { username, redirect: false })
	}
	

	return (
	
	
	<Box>	
		
			<VStack>
			<Heading as='h2' size='xl'>ยินดีต้อนรับเข้าสู่ระบบเว็บเช็คกิจกรรมนักศึกษา</Heading>
			<Button colorScheme='blue' p='4'>เข้าหน้าผู้ดูแลระบบ</Button>
				{providers.map(({ name, Icon }) => (
					<Button
						key={name}
						leftIcon={<Icon />}
						onClick={handleOAuthSignIn(name)}
						textTransform='uppercase'
						w='100%'
					>
						sign in with {name}
					</Button>
				))}
			</VStack>
		</Box>

		
	)
}

export default Signin
