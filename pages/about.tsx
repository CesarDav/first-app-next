import Link from "next/link";
import DarkLayout from "shared/layouts/DarkLayout";
import MainLayout from "shared/layouts/MainLayout";
import { ReactNode } from 'react';

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Go to <Link href="/">Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
};


AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}




