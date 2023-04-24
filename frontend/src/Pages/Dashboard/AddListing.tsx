import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { hostPost } from "../../utils/api";

const AddListing = () => {
  const {data:contextData} = useContext(AuthContext);
  const {data, loading, error, request} = useFetch();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [type, setType] = useState();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const {url, options} = hostPost({
      owner: contextData.id, 
      username: contextData.username, 
      title, 
      address, 
      bedrooms, 
      type
    });

    await request(url, options, true);

  }

  return(
    <>
      <Header />
      <div>
        <form onSubmit={onSubmit} className="p-6">
          <input type="text" placeholder="Title" className="form-control border border-[#d8dce1] h-[42px] px-3 text-sm rounded-md mb-2" required 
          onChange={e => setTitle(e.target.value)}/>
          <input type="text" placeholder="Address" className="form-control border border-[#d8dce1] h-[42px] px-3 text-sm rounded-md mb-2" required 
          onChange={e => setAddress(e.target.value)}/>
          <input type="number" placeholder="Bedrooms" className="form-control border border-[#d8dce1] h-[42px] px-3 text-sm rounded-md mb-2" required
          onChange={e => setBedrooms(e.target.value)}/>
          <select 
            className="form-control border-[#d8dce1] rounded-md mb-2"
            onChange={e => setType(e.target.value)}
            required
          >
            <option value=''>
              Select type listing
            </option>
            <option value='apartament'>
              Apartament
            </option>
            <option value='house'>
              House
            </option>
          </select>
          <button className="bg-pink text-[#FFF] w-full py-2 font-semibold rounded-[5px] text-center my-4 flex items-center justify-center">
            {loading ? <Loader2 className="animate-spin"/> : 'Submit'}
          </button>
        </form>
      </div>
    </>

  )
}

export default AddListing;