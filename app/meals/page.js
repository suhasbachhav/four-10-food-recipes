import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>;
}

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
                <Suspense fallback={( 
                    <p className={classes.loading}>
                        Loading Meals..
                    </p>    
                )}>
                    <Meals/>
                </Suspense>
            </main>
        </>
     );
}

export default MealsPage;