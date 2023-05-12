import React from 'react';
import Image from 'next/image';

import { Planette } from '../Planette/planette';
import jeu from '../jeuPlanette.png';

function Home() {
    return (
        <a href="/planette">
            <Image src={jeu} alt='oui' width={100} height={100} />
            <p>jeu de planette tkt il est bien</p>
        </a>
    );
}

export default Home;
