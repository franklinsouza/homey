import { useState } from "react";
import { toast } from "react-toastify"

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (url, options, alert) => {
    let res;
    let json;
    try{
      setError(null);
      setLoading(true);
      res = await fetch(url, options)
      json = await res.json();
      console.log(json);
      if(!res.ok) throw new Error('Error occured');

      if(alert) {
        toast.success("Succsess", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    }catch(err){
      json = null;
      setError('Error');
      if(alert) {
        toast.error("Error", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    }finally{
      setLoading(false);
      return { res, json };
    }
  }

  return {
    data,
    loading,
    error,
    request,
  }
}

export default useFetch;