import { Link } from 'react-router-dom';
import CardInput from '../CardInput/CardInput';

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="sets">

          Sets
        </Link>
      </li>
    </ul>
    <CardInput />
  </div>
);
export default Home;
