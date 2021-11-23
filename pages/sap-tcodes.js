import Page from '../components/page';
import { META_DESCRIPTION } from '../lib/constants';
import Layout from '../components/layout';
import Header from '../components/header';
import Sapcomponentlist from '../components/sapcomponentlist';
import Searchbox from '../components/searchbox';
export default function Saptcodes() {
  const meta = {
    title: 'SAP TCodes',
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="SAP TCodes" description={meta.description} />
        <div className="flex flex-col">
          <Searchbox />
          <Sapcomponentlist />
        </div>
      </Layout>
    </Page>
  );
}
