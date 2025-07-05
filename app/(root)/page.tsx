import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
   <div className="container mx-auto px-4 sm:px-5 lg:px-8">
      <section className='card-cta'>
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get yourself geared up for any interview...</h2>
          <p className='text-lg'>
            Practise on real questions with instant feedback.
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="hero-img" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
          {/*<p>You haven't taken any interviews</p>*/}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default page