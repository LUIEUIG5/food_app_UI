import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'
import biryani from '../../assets/biryani1.jpg'
import cbiryani from '../../assets/cb.jpg'
import pilav from '../../assets/pilav.jpg'
import veganbiryani from '../../assets/vbiryani.jpg'
import vegpilav from '../../assets/vpilav.jpg'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Biryani',
        image: cbiryani,
        ingredient: "'Chicken','Rice','yogurt'",
        description:
            ' Biryani has a strong savoury taste. Chicken biriyani recipe made with marinated Chicken, long grain rice, and aromatics that are steamed together.The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy',
        price: 10.99,
    },
    {
        id: 'm2',
        name: 'Vegiterian Biryani',
        image: biryani,
        description:
            'Vegiterian Biriyani recipe made with marinated paneer cubes, long grain rice, and aromatics that are steamed together.The bottom layer of rice absorbs all the juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy',
        price: 9.99,
    },
    {
        id: 'm3',
        name: 'Vegan Biryani',
        image: veganbiryani,
        description:
            'Vegiterian Biriyani recipe made with veggies cubes, long grain rice, and aromatics that are steamed together.The bottom layer of rice absorbs all the  juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy',
        price: 9.99,
    },
    {
        id: 'm4',
        name: 'Chicken Pilav',
        image: pilav,
        description:
            'Chicken Pilav involves cooking in stock or broth, adding spices, and other ingredients such as vegetables and meat, and employing some technique for achieving cooked grains that do not adhere.',
        price: 9.99,
    },
    {
        id: 'm5',
        name: 'Vegiterian Pilav',
        image: vegpilav,
        description:
            ' Vegiterian involves cooking in stock or broth, adding spices, and other ingredients such as vegetables and panner, and employing some technique for achieving cooked grains that do not adhere.',
        price: 8.99,
    },
    {
        id: 'm6',
        name: 'Vegan Pilav',
        image: vegpilav,
        description:
            'Vegan Pilav involves cooking in stock or broth, adding spices, and vegetables, and employing some technique for achieving cooked grains that do not adhere.',
        price: 8.99,
    },
    {
        id: 'm7',
        name: 'Make my own Biryani',
        image: biryani,
        description:
            'Biryani is a spiced mix of meat, veggies and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.',
        price: 11.99,
    },
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            image={meal.image}
            description={meal.description}
            price={meal.price}
        />
    ))

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
