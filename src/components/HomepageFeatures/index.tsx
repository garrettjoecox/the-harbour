import type {ReactNode} from 'react';
import {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type PortTag = 'Mod Support' | 'Multiplayer' | 'Enhanced Graphics' | 'HD Textures' | 'Widescreen' | 'Native PC';

type Port = {
  name: string;
  tags: PortTag[];
  docsPath?: string;
  downloadsUrl?: string;
};

type GameItem = {
  title: string;
  imagePath: string;
  ports: Port[];
};

const GameList: GameItem[] = [
  {
    title: 'The Legend of Zelda: Ocarina of Time',
    imagePath: '/img/games/oot.webp',
    ports: [
      {
        name: 'Ship of Harkinian',
        tags: ['Mod Support', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/HarbourMasters/shipwright/releases',
        docsPath: '/docs/ship-of-harkinian',
      },
    ],
  },
  {
    title: 'The Legend of Zelda: Majora\'s Mask',
    imagePath: '/img/games/marorasmask.webp',
    ports: [
      {
        name: 'Zelda 64: Recompiled',
        tags: ['Mod Support', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/Zelda64Recomp/Zelda64Recomp/releases',
      },
      {
        name: '2 Ship 2 Harkinian',
        tags: ['Mod Support', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        docsPath: '/docs/2ship2harkinian',
        downloadsUrl: 'https://github.com/HarbourMasters/2ship2harkinian/releases',
      },
    ],
  },
  {
    title: 'Super Mario 64',
    imagePath: '/img/games/sm64.webp',
    ports: [
      {
        name: 'GhostShip',
        tags: ['Multiplayer', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/HarbourMasters/ghostship/releases',
      },
    ],
  },
  {
    title: 'Mario Kart 64',
    imagePath: '/img/games/mariokart.webp',
    ports: [
      {
        name: 'Mario Kart 64: Recompiled',
        tags: ['Multiplayer', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/sonicdcer/MarioKart64Recomp/releases',
      },
      {
        name: 'Spaghetti Kart',
        tags: ['Multiplayer', 'Native PC'],
        downloadsUrl: 'https://github.com/HarbourMasters/SpaghettiKart/releases',
      },
    ],
  },
  {
    title: 'Banjo-Kazooie',
    imagePath: '/img/games/banjokazooie.webp',
    ports: [
      {
        name: 'Banjo: Recompiled',
        tags: ['Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/BanjoRecomp/BanjoRecomp/releases'
      },
    ],
  },
  {
    title: 'Starfox 64',
    imagePath: '/img/games/starfox.webp',
    ports: [
      {
        name: 'Starfox 64: Recompiled',
        tags: ['Multiplayer', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/sonicdcer/Starfox64Recomp/releases',
      },
      {
        name: 'Starship',
        tags: ['Mod Support', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/HarbourMasters/Starship/releases',
      },
    ],
  },
  {
    title: 'Goemon\'s Great Adventure',
    imagePath: '/img/games/goemon64.jpg',
    ports: [
      {
        name: 'Goemon 64: Recompiled',
        tags: ['Multiplayer', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/klorfmorf/Goemon64Recomp/releases',
      },
    ],
  },
  {
    title: 'Dinosaur Planet',
    imagePath: '/img/games/dinosaurplanet.jpg',
    ports: [
      {
        name: 'Dinosaur Planet: Recompiled',
        tags: ['Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/DinosaurPlanetRecomp/dino-recomp/releases',
      },
    ],
  },
  {
    title: 'Perfect Dark',
    imagePath: '/img/games/perfectdark.webp',
    ports: [
      {
        name: 'Perfect Dark port',
        tags: ['Multiplayer', 'Enhanced Graphics', 'Widescreen', 'Native PC'],
        downloadsUrl: 'https://github.com/fgsfdsfgs/perfect_dark/releases',
      },
    ],
  },
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function PortBadge({tag}: {tag: PortTag}) {
  return <span className={styles.portBadge}>{tag}</span>;
}

function PortItem({port}: {port: Port}) {
  return (
    <div className={styles.portItem}>
      <div className={styles.portHeader}>
        <h4 className={styles.portName}>{port.name}</h4>
        {/* <div className={styles.portTags}>
          {port.tags.map((tag, idx) => (
            <PortBadge key={idx} tag={tag} />
          ))}
        </div> */}
      </div>
      <div className={styles.portButtons}>
         {port.downloadsUrl && (
           <Link
             className="button button--primary button--sm"
             to={port.downloadsUrl}>
             Downloads
           </Link>
         )}
         {port.docsPath && (
           <Link
             className="button button--secondary button--sm"
             to={port.docsPath}>
             Docs
           </Link>
         )}
       </div>
    </div>
  );
}

function GameCard({game}: {game: GameItem}) {
  return (
    <div className={clsx('col col--4', styles.gameCard)}>
      <div className={styles.gameCardInner}>
        <div className={styles.gameImage}>
          <img src={game.imagePath} alt={game.title} />
        </div>
        <div className={styles.gameContent}>
          {/* <Heading as="h3" className={styles.gameTitle}>{game.title}</Heading> */}
          <div className={styles.portsList}>
            {game.ports.map((port, idx) => (
              <PortItem key={idx} port={port} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  // Shuffle ports for each game on page load to prevent bias
  const shuffledGameList = useMemo(() => {
    return GameList.map(game => ({
      ...game,
      ports: shuffleArray(game.ports),
    }));
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {shuffledGameList.map((game, idx) => (
            <GameCard key={idx} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
