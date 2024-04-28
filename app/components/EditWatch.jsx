'use client';

import { useState } from 'react';
import { updateWatch } from '../server-actions/updateWatch';


export default function EditWatch ({watch}){

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        brand: watch.brand,
        model: watch.model,
        referenceNumber: watch.referenceNumber,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
            </button>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-gray-700 p-4 rounded max-w-md mx-auto mb-8">
                                <span onClick={() => setShowModal(false)} className="absolute top-0 right-0 p-4 cursor-pointer text-white">&times;</span>
                                <form action={updateWatch} onSubmit={() => setShowModal(false)}>
                                    <input type="hidden" name="id" value={watch.id} />
                                    <div className="mb-4">
                                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor='brand'>Brand</label>
                                        <input 
                                            type="text"
                                            name="brand"
                                            id="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor='model'>Model</label>
                                        <input 
                                            type="text"
                                            name="model"
                                            id="model"
                                            value={formData.model}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor='referenceNumber'>Reference Number</label>
                                        <input 
                                            type="text"
                                            name="referenceNumber"
                                            id="referenceNumber"
                                            value={formData.referenceNumber}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Watch</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}