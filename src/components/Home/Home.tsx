import SpaceInvador from '../../assets/ennemies.png';

function Home() {
    return (
        <>{/*La balise <Link> bug */}
            <a href="/spaceinvader">
                <img src={SpaceInvador} alt='oui' width={150} height={100} />
                <p>Ouais les Aliens</p>
            </a>
        </>

    );
}

export default Home;
