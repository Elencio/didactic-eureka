import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Karhdo</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Brazil, Acarape</b>.
        </li>
        <li>
          Nasci num lugar bonito chamado <b className="font-medium">Inhambane</b> cidade.
        </li>
        <li>
          A primeira linguagem de programacão a aprender foi <b className="font-medium">C++</b>.
        </li>
        <li>Gosto do densenvolvimento Web</li>
        <li>
          I'm focusing on building <b className="font-medium">Social Analytics Software</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I'm a dog-person <Twemoji emoji="dog" />.
        </li>
        <li>
          I'm a sporty-guy. I love
          <span className="ml-1">
            <Twemoji emoji="tennis" />, <Twemoji emoji="soccer-ball" />
          </span>
          .
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" /> and rap music.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, LoL is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;