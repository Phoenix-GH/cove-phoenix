import Head from 'next/head';
import { Container } from 'reactstrap';

export default props => (
  <div>
    <Head>
      <title>Cove</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/css/default.css" />
      <link rel="stylesheet" href="/static/css/bundle.css" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400i,600,700" rel="stylesheet" />
    </Head>
    {props.children}
  </div>
);
