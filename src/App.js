import { Fragment, lazy, Suspense } from 'react';

import {Container, Spinner} from 'reactstrap';

import Header from './components/header/header';
import {Topic, Topicheader } from './components/topics/topic';

import Comments from './components/comments/comments';
import { Materials } from './components/materials/materials';
import { Navbtns } from './components/navbtns/navbtns';

function App() {

  const Lazyvideo = lazy(()=>import("./components/player/Player"))

  return (
    <Fragment>
      <Header/>
      <Container className='pagebody'>
        <main className='mainview'>
          <Suspense fallback={ <Spinner color="secondary">  Loading Video... </Spinner> }>
            <Lazyvideo/>
          </Suspense>
        </main>
        <main className='materials'>
          <Navbtns />
          <Materials/>
        </main>
        <main className='topics'>
          <Topicheader/>
          <Topic/>
        </main>
        <main className='comments'>
          <Comments/>
        </main>
      </Container>
  </Fragment>
  );
}

export default App;