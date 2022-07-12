import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client';

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`

console.log(BOOKS);

function Books() {
  const { loading, error, data } = useQuery(BOOKS)

  if (loading) return <p>ロード中・・・</p>
  if (error) return <p>エラー</p>

  return data.test.map(({ title, author }) => <div key={title}>
    <p>
      {author}: {title}
    </p>
    </div>)
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books></Books>
    </div>
  )
}

export default App
