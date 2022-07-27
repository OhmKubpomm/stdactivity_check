import React from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'
import { Heading } from '@chakra-ui/react'

const Protected = () => {
	const { push } = useRouter()
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated: () => {
			push('/auth/signin')
		},
	})

	if (status === 'loading') {
		return <Heading>Loading...</Heading>
	}

	if (status === 'unauthenticated')
		return <Heading> You are unauthenticated. this is a protected page.</Heading>

	return <Heading>{session.user.email}</Heading>
}

export default Protected
