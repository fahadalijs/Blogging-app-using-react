import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/herosection/HeroSection'
import BlogPostCard from '../components/blogPostcard/BlogPostCard'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <Layout>
      <HeroSection/>
      <BlogPostCard/>
      
    </Layout>
  )
}

export default Home