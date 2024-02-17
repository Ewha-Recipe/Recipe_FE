import { Popular, Random, All } from './';
import { Navbar } from '../navbar';

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
