import { useState } from "react";

let nextId = 0;

export default function cardLists (){
    const[name,setName] =useState('');
    const[desc,setDesc] =useState('');
    const[cards,setcards] =useState([]);
    const[position, setPosition] = useState('');


    function handleClickAdd(n:string,d:string,p:string){
        console.log("Card List:",cards);
        setcards([
            ...cards,
            {
                id: nextId++,
                name: n,
                desc: d,
                position: p
                
            }
        ]);
    }

    function handleViewCard(cards) {
        alert(`Name: ${cards.name}\nPosition: ${cards.position}\nDescription: ${cards.desc}`);
    }

    return(
    <div>
    <h1>My Card Lists:</h1>
    <label>Name:</label>
    <input name="cName" className="border-2" onChange={(e) => setName(e.target.value)}/><br/>
    <label>Position</label>
    <input name="cName" className="border-2" onChange={(e) => setPosition(e.target.value)}/><br/>
        <label>Description</label>
        <textarea name="cDesc" rows={4} cols={50} className="border-2" onChange={(e)=> setDesc(e.target.value)}/>
       
             <hr/>
             <button onClick={() => handleClickAdd(name,desc,position)} className="border bg-green-300 h-18 w-20">
                Add Card
             </button>
             <hr/>
             <h1>My Card Lists:</h1>
             {cards.length === 0 ? (
                <p>ไม่มีข้อมูล</p>
             ) : (
                <table className="border-collapse bordes border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">No</th>
                            <th className="border border-gray-300 p-2">ชื่อ - สกุล</th>
                            <th className="border border-gray-300 p-2">ตำแหน่ง</th>
                            <th className="border border-gray-300 p-2">รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(cards => (
                            <tr key={cards.id}>
                                <td className="border border-gray-300 p-2">{cards.id+1}</td>
                                <td className="border border-gray-300 p-2">{cards.name}</td>
                                <td className="border border-gray-300 p-2">{cards.position}</td>
                                <td className="border border-gray-300 p-2"> <button
                                        onClick={() => handleViewCard(cards)}
                                        className="border bg-red-300 px-2 py-1"> View</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
             )}
        </div>
    );
}
