import { ApolloProvider } from '@apollo/client';
import client from '../app/graphql/apollo-client'; // Путь к вашему клиенту Apollo
import '../app/scss/app.scss'; // Подключите здесь ваши глобальные стили

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;