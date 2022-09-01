import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, Grid } from '@chakra-ui/react'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import '/styles/globals.css'
import {QueryClientProvider,QueryClient} from 'react-query';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<QueryClientProvider client={queryClient}>

			<ChakraProvider>
			<NextUIProvider>
				<Grid
					sx={{
						h: '100vh',
						placeItems: 'center',
						px: '5rem',
						textAlign: 'center',
					}}
				>
					<Component {...pageProps} />
				</Grid>
				
    </NextUIProvider>
			</ChakraProvider>
			</QueryClientProvider>
		</SessionProvider>
		
	)
}

export default MyApp
