const { ApolloServer, gql } = require("apollo-server")

//データ
const books = [{
        title: "吾輩は猫である",
        author: "夏目漱石",
    },
    {
        title: "走れメロス",
        author: "太宰治",
    }
]

//データの型Bookで、返ってくるときの形状をQueryで設定
const typeDefs = gql `
  type Book {
    title: String,
    author: String
  }

  type Query {
    test: [Book]
  }
  `;

//resolvers内の関数の返り値がrequestした時に返ってくる
const resolvers = {
    Query: {
        test: () => books,
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
    //ApolloServerはtypeDefsとresolversの2つの引数をとる

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})