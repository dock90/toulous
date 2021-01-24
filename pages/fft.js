import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
// components
import Layout from '../components/layout'
import Button from '../components/button'

// styles
const Content = styled.div`
  display: grid;
  align-content: start;
  padding: 0 76px 76px 76px;

  @media screen and (max-width: 414px) {
    padding: 0 20px;
  }

  form {
    display: grid;
    align-content: start;
  }
`

const Card = styled.div`
  display: grid;
  align-content: start;
  border-radius: 40px;
  background: #FFFFFF;
  box-shadow: 5px 5px 50px 5px rgba(96,96,96,0.16);
  padding: 20px 40px;
  margin-bottom: 52px;

  textarea {
    height: auto;
    width: 80vw;
    outline: none;
    border: none;
    font-size: 32px;
    font-family: interstate-mono, monospace;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 24px;
    font-family: interstate-mono, monospace;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Fft = () => {
  const [initial, setInitial] = useState(true)
  const [rewrite, setRewrite] = useState(false)
  const [rows, setRows] = useState(2)
  const [copy, setCopy] = useState('')
  const [splitCopy, setSplitCopy] = useState('')
  const [revisedCopy, setRevisedCopy] = useState([])
  const [revision, setRevision] = useState(false)
  const [finalCopy, setFinalCopy] = useState([])

  const submitText = () => {
    setCopy(event.target.value)
    const lines = (event.target.value.length) / 56

    if (lines > 2) {
      setRows(Math.floor(lines))
    }
  }
  const startProcess = () => {
    console.log('Here we go!')
    event.preventDefault()

    const splitCopy = copy.match(/[^\.!\?]+[\.!\?]+/g)

    if (splitCopy) {
      setInitial(false)
      setRewrite(true)
      const formattedCopy = splitCopy.map(text => {
        return {
          id: Math.floor(Math.random() * 400),
          text: text.trim()
        }
      })

      setSplitCopy(formattedCopy)
    }
  }

  const updateCopy = (id) => {
    const selectedCopy = splitCopy.map(copy => {
      if (copy.id === id) {
        copy.newText = event.target.value
      }
      return copy
    })

    setRevisedCopy(selectedCopy)
  }

  const combineEdits = () => {
    event.preventDefault()
    setRewrite(false)
    setRevision(true)

    const combinedText = revisedCopy.map(copy => {
      if (copy.newText) {
        return copy.newText
      }
      return copy.text
    })
    setFinalCopy(combinedText)
  }

  return (
    <Layout>
      <Head>
        <title>Toulous | 😼 Meow! Fft, fft, fft!</title>
        <meta name="description" content="Meow! Fft, fft, fft! Its not easy being a tough alley cat." />
      </Head>
      <Content>
        {initial &&
          <form onSubmit={startProcess}>
            <Card>
              <textarea
                value={copy}
                onChange={submitText}
                placeholder='Copy text here... (it needs at least one punctuation mark)'
                rows={rows}
              />
            </Card>
            <Button type='submit' right>Process</Button>
          </form>
        }
        {rewrite && splitCopy &&
          <form onSubmit={combineEdits}>
            {
              splitCopy.map(copy => {
                const { id, text } = copy
                return (
                  <Card>
                    <h3>{text}</h3>
                    <textarea
                      value={revisedCopy[text]}
                      onChange={() => updateCopy(id)}
                    />
                  </Card>
                )
              })
            }
            <Button type='submit' right>Process</Button>
          </form>
        }
        {revision &&
          <Card>
            {finalCopy.map(copy => {
              return <h3>{copy}</h3>
            })}
          </Card>
        }
      </Content>
    </Layout>
  )
}

export default Fft
