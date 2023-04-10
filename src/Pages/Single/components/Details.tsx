import { ChevronRight } from "lucide-react";

const Details = () => {
  return(
    <div className="p-10 flex">
      <h3 className="text-lg font-semibold basis-40">
        Prices
      </h3>

      <ul className="grid grid-cols-2 gap-y-5 grow">
        <li className="flex items-center">
          <ChevronRight size={18} className="mr-4"/>
          ID: 
          <span className="font-semibold text-sm">
            267
          </span>
        </li>
        <li className="flex items-center">
          <ChevronRight size={18} className="mr-4"/>
          Guest: 
          <span className="font-semibold text-sm">
            4
          </span>
        </li>
        <li className="flex items-center">
          <ChevronRight size={18} className="mr-4"/>
          Bedrooms: 
          <span className="font-semibold text-sm">
            2
          </span>
        </li>
        <li className="flex items-center">
          <ChevronRight size={18} className="mr-4"/>
          ID: 
          <span className="font-semibold text-sm">
            267
          </span>
        </li>
        <li className="flex items-center">
          <ChevronRight size={18} className="mr-4"/>
          Guest: 
          <span className="font-semibold text-sm">
            4
          </span>
        </li>
        <li className="flex items-center">
          <ChevronRight size={18} className="mr-4"/>
          Bedrooms: 
          <span className="font-semibold text-sm">
            2
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Details;