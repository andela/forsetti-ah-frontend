import React from 'react';
import { Container } from 'reactstrap';
import { ArticleFormComponent } from '../components/ArticleForm';
import Footer from '../components/common/Footer';

const CreateArticlePage = () => (
  <Container>
    <ArticleFormComponent />
  </Container>
);

export default CreateArticlePage;
