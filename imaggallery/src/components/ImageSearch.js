import React,{useState} from 'react';

const ProfessionalInput = ({SearchText}) => {
    const [text,setText]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault();
        SearchText(text)
    }
  return (
    <div className="flex justify-center mt-8">
        <form onSubmit={onSubmit}> 
      <div className="w-full flex">
        <input onChange={e => setText(e.target.value)} 
          className="w-full mr-3 h-10 border-cyan-900 p-2 border rounded-l-md focus:outline-none focus:ring focus:border-gray-500"
          type="text"/>
        <button
          className="bg-gray-500 w-1/3  text-white p-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-300">
          Search
        </button>
      </div>
      </form>
    </div>
  );
};

export default ProfessionalInput;
