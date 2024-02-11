import './Home.scss';
import './components/Baner'
import Baner from './components/Baner';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Block4 from './components/Block4';
import Block5 from './components/Block5';
import Block6 from './components/Block6';
import Block7 from './components/Block7';
import Block8 from './components/Block8';
import Block9 from './components/Block9';

function Home() {
  return (
    <div className="home d-flex flex-column gap-4">
      <Baner />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
    </div>
  );
}

export default Home;