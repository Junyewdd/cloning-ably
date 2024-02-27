import Layout from '@/components/Layout';
import Main from '@/components/main/Main'
import { Box } from '@mui/material';
import React, { ReactElement } from 'react'

const Home = () => {
  return (
    <Main/>
  )
}

export default Home;

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>