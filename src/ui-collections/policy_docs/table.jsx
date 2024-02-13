import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

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
     
    function removeWord(str,word){
        const ind = str.indexOf(word);
        if(ind !== -1){
            return str.substring(ind + word.length);
        }
        return str;
    }

    const openPdf = async() => {
        const response = await axios.get('http://localhost:8000/getpolicydata')
        console.log(response.data.result);
        const PDFpath = response.data.result;

        const str = removeWord(PDFpath, 'public');
        console.log(str);
        window.open(str,'_blank'); 
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
                                <button className='pdfButton' onClick={() => openPdf()}>PDF</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PolicyDocs;





// import React from 'react'

// const PolicyDocs = () => {
//     const openPdf = () => {
//         window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank")
//     }
    
// return (
//     <>
//         <table className='policyTable'>
//             <caption className='policyData'>Policy Docs</caption>
//             <thead>
//                 <tr>
//                     <th className='policyData'>S.No</th>
//                     <th className='policyData'>Policy Name</th>
//                     <th className='policyData'>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td className='policyData'>1</td>
//                     <td className='policyData'>Attendance</td>
//                     <td className='policyData'><button onClick={openPdf}> PDF </button></td>
//                 </tr>
//                 <tr>
//                     <td className='policyData'>2</td>
//                     <td className='policyData'>Leave</td>
//                     <td className='policyData'><button onClick={openPdf}> PDF </button></td>
//                 </tr>
//                 <tr>
//                     <td className='policyData'>3</td>
//                     <td className='policyData'>Employee</td>
//                     <td className='policyData'><button onClick={openPdf}> PDF </button></td>
//                 </tr>
//                 <tr>
//                     <td className='policyData'>4</td>
//                     <td className='policyData'>Abc</td>
//                     <td className='policyData'><button onClick={openPdf}> PDF </button></td>
//                 </tr>
//                 <tr>
//                     <td className='policyData'>5</td>
//                     <td className='policyData'>Def</td>
//                     <td className='policyData'><button onClick={openPdf}> PDF </button></td>
//                 </tr>
//                 <tr>
//                     <td className='policyData'>6</td>
//                     <td className='policyData'>xyz</td>
//                     <td className='policyData'><button onClick={openPdf}> PDF </button></td>
//                 </tr>
//             </tbody>
//         </table>
//     </>
//   )
// }

// export default PolicyDocs;