import { META_DESCRIPTION } from '../../lib/constants';
import Page from '../../components/page';
import Layout from '../../components/layout';
import Header from '../../components/header';
import { useRouter } from 'next/router';

export default function Saptcodes(postData) {
  const meta = {
    title: 'Speakers - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };
  const router = useRouter();
  console.log(postData.postData);
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero={postData.name} description={meta.description} />
      </Layout>
    </Page>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { componentid: 'FI' } },
      { params: { componentid: 'LO' } },
      { params: { componentid: 'BC' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = { name: 'you are awesome' };
  return {
    props: postData,
  };
}
