import React from 'react'
import { useRouter } from 'next/router'
import { Heading, Button, Grid } from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {
	const { data: session } = useSession()

	const { push, asPath } = useRouter()

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false , callbackUrl: '/indexnotauth'})

		push(data.url)
	}

	const handleSignIn = () => push(`/indexnotauth`)

	return (
		<Grid placeItems='center' gridRowGap='1rem'>
			{session ? (
				<>
					<Heading>signed in as {session.user.username}</Heading>
					
					<Button onClick={handleSignOut}>Sign out</Button>
				</>
			) :
			(
				<>
					<Heading>You are not signed in</Heading>

					<Button onClick={handleSignIn}>Sign in</Button>
				</>
			)}
		</Grid>
	)
}

export default Home
