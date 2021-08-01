import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const TestPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>
    <dl>
      <dd>DATA</dd>
      <dt></dt>
    </dl>
  </div>
)

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context
  const { path } = query

  // if (path) {
  //   console.log(path.join('/'))
  // } else {
  //   console.log('/')
  // }

  return {
    props: {
      data: 'bar',
    },
  }
}

export default TestPage
