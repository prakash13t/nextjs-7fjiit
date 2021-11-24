import Page from '../../components/page';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Tcodedetails from '../../components/tcodedetails';
import { useRouter } from 'next/router';

export default function Saptable(postData) {
  const meta = {
    title: 'EKKO Table',
    description: 'Meta of table id',
  };
  const router = useRouter();
  console.log(postData.postData);
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero={postData.name} description={meta.description} />
        <Tcodedetails />
      </Layout>
    </Page>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tableid: 'FI' } },
      { params: { tableid: 'LO' } },
      { params: { tableid: 'BC' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const name = 'you are awesome' + params.componentid;
  const postData = { name: name };
  return {
    props: postData,
  };
}
