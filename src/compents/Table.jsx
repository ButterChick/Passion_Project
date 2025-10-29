import React from "react";

const Table = () => {
    const patients = [
        { name: "Dhruv", status: "Diarrhea", ward: "A1" },
        { name: "Tayagi", status: "Typhoid", ward: "B2" },
    ];
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Patient Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Initial assessment
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ward
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Daily Notes
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Discharge Summary
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key ={index} 
                        className="odd:bg-white odd:dark:bg-gray-900 
                        even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-gray-200 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {patient.name}
                            </th>
                            <td className="px-6 py-4">{patient.status}</td>
                            <td className="px-6 py-4">{patient.ward}</td>
                            <td>
                                <a href="#" 
                                className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Daily Notes
                                </a>
                            </td>
                            <td>
                                <a href="#" 
                                className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Discharge Summary
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;