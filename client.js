// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'xsft64dg',
  dataset: 'production',
  useCdn: true
})
