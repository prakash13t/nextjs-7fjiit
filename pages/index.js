import Head from 'next/head';
import { useRouter } from 'next/router';
import Page from '../components/page';
import Layout from '../components/layout';
import { META_DESCRIPTION } from '../lib/constants';

export default function Home() {
  const { query } = useRouter();
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta} fullViewport>
      <Layout></Layout>
    </Page>
  );
}
