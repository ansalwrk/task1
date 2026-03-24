import {   }from 'lucide-react';


export const Screen7 = () => {
return  (
<>
<div style={{ backgroundColor:"black"}}>



<div style={{borderColor:"#ffffff", padding:"10px 50px 10px 50px"}}>
  <table className="w-full text-left border-collapse">
    <thead className="bg-[#1a1a1a] text-[#ff8800]">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                   Feature
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                2G Device
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                   4G Device
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                   Data Speed
                </th>
                <td class="px-6 py-4">
                   Basic
                </td>
                <td class="px-6 py-4">
                   High-speed
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Network Coverage
                </th>
                <td class="px-6 py-4">
                   Urban areas
                </td>
                <td class="px-6 py-4">
                   Pan-India
                </td>

            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Accuracy
                </th>
                <td class="px-6 py-4">
                    Standard GPS
                </td>
                <td class="px-6 py-4">
                    Multi-constellation GNSS
                </td>





                
            </tr>
        </tbody>
    </table>
</div>
















</div>
</>

);

};