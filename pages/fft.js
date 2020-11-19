import { useState } from 'react'
import styled from 'styled-components'
// components
import Header from '../components/header'
import Button from '../components/button'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 150px;
  grid-template-columns: 1fr;
  padding-left: 76px;
  padding-right: 76px;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  form {
    display: grid;
  }
`

const Card = styled.div`
  display: grid;
  border-radius: 40px;
  background: #FFFFFF;
  box-shadow: 5px 5px 50px 5px rgba(96,96,96,0.16);
  padding: 20px 40px;
  margin-bottom: 52px;

  textarea {
    height: auto;
    min-width: 84vw;
    max-width: 84vw;
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
  const [copy, setCopy] = useState('')
  const [splitCopy, setSplitCopy] = useState('')
  const [revisedCopy, setRevisedCopy] = useState([])
  const [revision, setRevision] = useState(false)
  const [finalCopy, setFinalCopy] = useState('')

  const startProcess = () => {
    console.log('Here we go!')
    event.preventDefault()
    setInitial(false)
    setRewrite(true)

    const splitCopy = copy.match(/[^\.!\?]+[\.!\?]+/g)

    const formattedCopy = splitCopy.map(text => {
      return {
        id: Math.floor(Math.random() * 400),
        text: text.trim()
      }
    })

    setSplitCopy(formattedCopy)
  }

  const updateCopy = (id) => {
    console.log(id)
    console.log(event.target.value)
    const filteredCopy = splitCopy.filter(data => data.id != id)

    setRevisedCopy([
      ...filteredCopy,
      {
        id: id,
        text: event.target.value
      },
    ])
  }

  const combineEdits = () => {
    event.preventDefault()
    setRewrite(false)
    setRevision(true)

    const combinedText = revisedCopy.map(copy => copy.text)
    setFinalCopy(combinedText.join(','))
  }

  return (
    <Container>
      <Header />
      <Content>
        {initial &&
          <form onSubmit={startProcess}>
            <Card>
              <textarea
                value={copy}
                onChange={() => setCopy(event.target.value)}
                placeholder='Copy text here...'
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
            {revisedCopy.map(copy => {
              const { id, text } = copy
              return <h3>{text}</h3>
            })}
          </Card>
        }
      </Content>
    </Container>
  )
}

export default Fft
