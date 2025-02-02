import Banner from '@/Components/Banner';
import Cards from '@/Components/Cards';
import Finance from '@/Components/Finance';
import Icons from '@/Components/Icons';
import Numbers from '@/Components/Numbers';
import Philosophy from '@/Components/Philosphy';
import Slides from '@/Components/Slides';

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <Finance />
      <Philosophy />
      <Cards />
      <Slides />
      <Numbers />
      <Icons />
    </div>
  );
};

export default Home;
