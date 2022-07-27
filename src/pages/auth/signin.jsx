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
	

	console.log(session)
	if (status === 'loading') return <Heading>Checking Authentication...</Heading>

	if (session) {
		setTimeout(() => {
			push('/')
		}, 5000)

		return <Heading>You are already signed in</Heading>
	}

	const handleOAuthSignIn = (provider) => () => signIn(provider)



	return (
		<Box>
		

			<VStack>
				{providers.map(({ name, Icon }) => (
					<Button
						key={name}
						leftIcon={<Icon />}
						onClick={handleOAuthSignIn(name)}
						textTransform='uppercase'
						w='100%'
					>
						Sign in with {name}
					</Button>
				))}
			</VStack>
		</Box>
	)
}

export default Signin
