import { Navbar } from '../navbar';
import { All } from './all';
import { Popular } from './popular';
import { Random } from './random';

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
