import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

function MealsPage() {
    return ( 
        <>
            <header className={classes.header}>
                <h1>Delicious Meals, created <span className={classes.highlight}>by you</span></h1>
                <p>
                    Choose you favorite recipe and cook it by yourself! It is easy and fun! 
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]}/>
            </main>
        </>
     );
}

export default MealsPage;