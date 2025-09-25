import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CustomerTickets from '../components/CustomerTickets'
import TaskStatus from '../components/TaskStatus'
import ResolveTask from '../components/ResolveTask'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div  className='bg-gray-100'>
        <header>
            <Navbar />
        </header>
        <main>
            <Banner />
            <div className='container mx-auto grid grid-cols-1 gap-4 md:grid-cols-12'>
                <div className='md:col-span-9'><CustomerTickets /></div>
                <div className=' md:col-span-3'>
                    <TaskStatus />
                    <ResolveTask />
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default HomeLayout