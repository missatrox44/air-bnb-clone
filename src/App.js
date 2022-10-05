import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import lifeLessons from './images/life-lessons.png'




export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img={lifeLessons}
                rating='5.0'
                reviewCount={6}
                country='USA'
                title='Life lessons with Katie Zaferes'
                price={136}
            />

            <Card 
                img={lifeLessons}
                rating='5.0'
                reviewCount={6}
                country='USA'
                title='Life lessons with Katie Zaferes'
                price={136}
            />

            <Card 
                img={lifeLessons}
                rating='5.0'
                reviewCount={6}
                country='USA'
                title='Life lessons with Katie Zaferes'
                price={136}
            />
        </div>
    )
}