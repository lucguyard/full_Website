const { Neo4jGraphQL } = require("@neo4j/graphql");

const { ApolloServer, gql } = require("apollo-server");

const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const neo4j = require("neo4j-driver");


// (You may need to replace your connection details, username and password)

const AURA_ENDPOINT = 'neo4j+s://f480ef82.databases.neo4j.io';

const USERNAME = 'neo4j';

const PASSWORD = 'HDrzWSWTaWG5v8Yj5TfcTeze7FdpFnc3Pw2og7hCxk8';


// Create Neo4j driver instance

const driver = neo4j.driver(AURA_ENDPOINT, neo4j.auth.basic(USERNAME, PASSWORD));


const typeDefs = gql`

type Client{
    id : ID
    user : String
    password : String
}

`;


// Create instance that contains executable GraphQL schema from GraphQL type definitions

const neo4jGraphQL = new Neo4jGraphQL({

  typeDefs,

  driver

});


// Generate schema

neo4jGraphQL.getSchema().then((schema) => {

  // Create ApolloServer instance to serve GraphQL schema

  const server = new ApolloServer({

    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({ })],

    schema,



    context: { driverConfig: { database: 'neo4j' } }

  });


  // Start ApolloServer

  server.listen().then(({ url }) => {

    console.log(`GraphQL server ready at ${url}`);

  });

});