import Page from '../components/page';
import { META_DESCRIPTION } from '../lib/constants';
import Layout from '../components/layout';
import Header from '../components/header';
import Sapcomponentlist from '../components/sapcomponentlist';
import Sappackage from '../components/sappackages';
import Searchbox from '../components/searchbox';
export default function Saptcodes() {
  const meta = {
    title: 'Speakers - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="SAP Tables" description={meta.description} />
        <div className="flex flex-col">
          <Searchbox />
          <div className="grid grid-cols-2 gap-20">
            <Sapcomponentlist />
            <Sappackage />
          </div>
        </div>
      </Layout>
    </Page>
  );
}
