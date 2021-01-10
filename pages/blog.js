import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components'
// components
import Layout from '../components/layout'
import sanity from '../client'

// styles
const Container = styled.div`
  padding: 18px 76px;

  @media screen and (max-width: 414px) {
    padding: 0 20px;
  }

  article {
    max-width: 600px;
  }

  h2 {
    font-family: interstate-mono, monospace;
    font-weight: 700;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none;
  }

  p {
    font-family: interstate-mono, monospace;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const query = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  overview,
  slug,
}
`;

const Posts = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Toulous | 📚 Blog</title>
        <meta name="description" content="A collection of posts covering topics covering startup content marketing." />
      </Head>
      <Container>
        {posts.map(post => {
          const { _id, slug: { current }, title, overview } = post
          return (
            <article key={_id}>
              <Link href="/blog/[current]" as={`/blog/${current}`}>
                <a>
                  <h2>{title}</h2>
                </a>
              </Link>
              <p>{overview}</p>
            </article>

          )
        })}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await sanity.fetch(query);
  return {
    props: { posts }
  };
};

export default Posts
