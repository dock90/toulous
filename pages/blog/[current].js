import styled from 'styled-components'
import BlockContent from "@sanity/block-content-to-react";
// components
import Layout from '../../components/layout'
import sanity from '../../client'

// styles
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 76px;

  @media screen and (max-width: 414px) {
    padding: 0 20px;
  }

  h1 {
    font-family: interstate-mono, monospace;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-family: interstate-mono, monospace;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
`

// queries
const postsQuery = `*[_type == "post"] { _id, slug { current } }`;

const singlePostQuery = `*[_type == "post" && slug.current == $current] {
  _id,
  slug,
  title,
  body
}[0]
`;

const Post = ({ post }) => {
  const { body, title } = post
  return (
    <Layout>
      <Container>

        <h1>{title}</h1>
        <BlockContent
          blocks={body}
        />
      </Container>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const posts = await sanity.fetch(postsQuery);
  const paths = posts.map(post => ({
    params: { current: post.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = await sanity.fetch(singlePostQuery, { current: params.current });
  return { props: { post } };
};

export default Post
