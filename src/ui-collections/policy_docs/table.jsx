import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
const path = require("path");

const PolicyDocs = () => {
    const [policyData, setPolicyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/policydocs'); 
                setPolicyData(response.data.policyData);
            } catch (error) {
                console.error('Error fetching policy data:', error);
            }
        };
    
        fetchData();

    }, []); 
     
    const handlePdf = async () => {
        try {
          const response = await axios.get('http://localhost:8000/getpolicydata' , { responseType: 'blob' });
          console.log(response);
          const blob = new Blob([response.data] , { type: 'application/pdf' });
          console.log(response.data);
          const pdf = URL.createObjectURL(blob);
          console.log(pdf);
          window.open(pdf, '_blank');
        } catch (error) {
          console.error('Error fetching PDF:', error);
        }
      };
      
    return (
        <div className="policyTableWrapper"> 
            <table className='policyTable'>
                <caption className='policyCaption'>POLICY DOCS</caption>
                <thead>
                    <tr>
                        <th className='policyHeader'>S.No</th>
                        <th className='policyHeader'>Policy Name</th>
                        <th className='policyHeader'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {policyData.map((policy, index) => (
                        <tr key={policy.id}>
                            <td className='policyData'>{policy.id}</td>
                            <td className='policyData'>{policy.name}</td>
                            <td className='policyData'>
                                <button className='pdfButton' onClick={() => handlePdf()}>PDF</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PolicyDocs;