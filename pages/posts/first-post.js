import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <Image
              src="/../public/images/placeholder.jpeg" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
        />
      </h2>
    </Layout>
  );
}