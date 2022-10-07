import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
console.log(data)



// import lifeLessons from './images/life-lessons.png'




export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                img={item.coverImg}
                ratings={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className='cards-list'>
                {cards}
            </section>
        </div>
    )
}