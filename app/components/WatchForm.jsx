import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
    return (
        <form className="bg-gray-700 p-4 rounded shadow-lg max-w-md mx-auto mb-8" action={addWatch}>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="brand">Brand</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    name="brand" 
                    id="brand" 
                    required/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="model">Model</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    name="model" 
                    id="model" 
                    required/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="referenceNumber">Reference Number</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    name="referenceNumber" id="referenceNumber" 
                    required/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Watch</button>
        </form>
    )
}