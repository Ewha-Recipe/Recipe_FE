import { All, Popular, Random } from './';
import { Navbar } from '../navbar';

export function Home() {
  return (
    <>
      <Navbar />
      <Popular />
      <Random />
      <All />
    </>
  );
}
