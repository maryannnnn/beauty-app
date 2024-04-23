import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'https://massage.neo-lines.com/graphql', // Замените на ваш URL GraphQL сервера
    cache: new InMemoryCache()
});

export default apolloClient;
