import {
  About,
  Explore,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
} from '../sections/homepage';

const Page = () => (
  <>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
    </div>
  </>
);

export default Page;
