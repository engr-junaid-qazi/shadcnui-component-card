import {Card} from "@/components/ui/card";
import Image from 'next/image';
import image from '../../public/pictures/new2.jpg'

const CardDemo = () => {
  return (
    
    <Card className="w-[600px] group hover:bg-red-300 hover:p-8 bg-blue-300 
    p-6 flex divide-x-4 divide-red-800 justify-start items-center duration-300
    -mt-40">
      <Image
      alt='artificial-intelligence-and-machine-learning' 
      src={image}
      width={1000}
      height={700}
      className=" w-[350px] h-[200px] rounded-full -mt-2 
      -mb-2 duration-300"
      />
      <div className="text-left ml-6 p-4 font-medium group-hover:p-6"> 
      <p> <b> Engr. Junaid Jahangir Qazi</b></p>
      <p> Electronics Engineer || AI, ML, DL Engineer & Enthusiast </p> 
      <br/>
      <p> <b> Address: </b> UG-13, Glamour Mall, Block 10-A, Main Rashid Minhas Road, near 
      Lasania Restaurant, Gulshan-e-Iqbal, Karachi.</p> 
      <p> <b> Cell # </b> +92-333-2564221</p>
      </div>
    </Card>
  )
}
export default CardDemo;