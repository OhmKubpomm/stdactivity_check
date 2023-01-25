import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import '/styles/globals.css'
import {QueryClientProvider,QueryClient} from 'react-query';
import {store} from '../redux/store';
import {Provider} from 'react-redux';

import * as React from 'react';

//create a client
const queryClient = new QueryClient();
const CodeMirror = require;
if (CodeMirror) {
	//CodeMirror object is defined
 }
 
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<QueryClientProvider client={queryClient}>
			<Provider store={store}>
			<ChakraProvider>
			<NextUIProvider>

			
					<Component {...pageProps} />
			
		
    </NextUIProvider>
			</ChakraProvider>
			</Provider>
			</QueryClientProvider>
		</SessionProvider>
		
	)
}

export default MyApp
