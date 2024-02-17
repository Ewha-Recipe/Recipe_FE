import { Navbar } from '../navbar';
import { All, Popular, Random } from './';

export function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Popular />
        <Random />
        <All />
      </div>
    </>
  );
}
