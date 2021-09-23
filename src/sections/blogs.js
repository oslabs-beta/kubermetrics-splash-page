import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';
import blogImage2 from 'assets/blog-1-2.png';
import blogImage3 from 'assets/blog-1-3.png';
import blogImage4 from 'assets/blog-1-4.png';
import dom from 'assets/dom.jpeg'
import ahad from 'assets/ahad2.jpeg'
import justin from 'assets/justin.png'

const BLOG_DATA = [
  {
    image: ahad,
    title: 'Ahad Rajput',
    linkedIn:'https://www.linkedin.com/in/arajput96/',
    github: 'https://github.com/arajput96',
    path: '/',
  },
  {
    image: dom,
    title: 'Dominic DiSalvo',
    linkedIn:'https://www.linkedin.com/in/dominicdisalvo/ ',
    github: 'https://github.com/dominicd17',
    path: '/',

  },
  {
    image: justin,
    title: 'Justin Buckner',
    linkedIn:'https://www.linkedin.com/in/jbuild/ ',
    github: 'https://github.com/JWadeOn',
    path: '/',
  },
  // {
  //   image: null,
  //   title:
  //     'Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards',
  //   description: null,
  //   path: '/',
  //   linkLabel: null,
  // },
  // {
  //   image: blogImage3,
  //   title: 'Multiple task wireframing with team management perform better',
  //   description: null,
  //   path: '/',
  //   linkLabel: null,
  // },
  // {
  //   image: blogImage2,
  //   title: 'Multiple art board prototype with Figma',
  //   description:
  //     'Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos',
  //   path: '/',
  //   linkLabel: 'Learn More',
  // },
  // {
  //   image: blogImage4,
  //   title:
  //     'Team presentation with latest user interface & experience reach more',
  //   description: null,
  //   path: '/',
  //   linkLabel: null,
  // },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Meet the team "
          text="Team Kubermetrics"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, linkedIn, github, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                linkedIn={linkedIn}
                github={github}
                path={path}
                // linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
    color: 'white',
    backgroundColor: '#1a1e21'
  },
  blogWrapper: {
    mx: '-15px',
  },
};
