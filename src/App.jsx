import {useEffect, useRef, useState, useMemo} from 'react';
import { About, Footer, Header, Skills, Work } from "./container"
import { Navbar, SocialMedia, NavigationDots } from "./components"
import './App.scss'

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const home = useIsInViewport(ref1);
  const about = useIsInViewport(ref2);
  const work = useIsInViewport(ref3);
  const skills = useIsInViewport(ref4);
  const contact = useIsInViewport(ref5);

  const navs = [home, about, work, skills, contact]

  return (
    <div className="app">
      <Navbar />
      <Header ref={ref1} />
      <About ref={ref2} />
      <Work ref={ref3} />
      <Skills ref={ref4} />
      <Footer ref={ref5} />
      <NavigationDots active={navs} />
      <SocialMedia />
    </div>
  )
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default App
