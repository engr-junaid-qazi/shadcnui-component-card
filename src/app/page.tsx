import Image from 'next/image';
import CardDemo from '@/components/card1';
import Link from 'next/link';
import { CardWithForm } from '@/components/card2';


export default function Home() {
  return (
    <div>

      <h1 className="text-center text-2xl pt-6"> This is my First Shadcn UI Card Component</h1>
      <div className="text-center justify-center items-center p-6 ">

      </div>
      <div className='w-screen h-screen text-center flex items-center 
      justify-around p-10'>
        <CardDemo />
        <CardWithForm /> 
      </div>
    </div>


  )
}
