import { useState } from "react";
const todos =[
    {
        id: 100,
        title:"วัยเด็ก",
        description:"กำลังเรียน",
        cover:"/images/profile.png",
        icon:"/images/user.png",
        enrollment:true,
        checked:true
    },
    {
        id: 200,
        title:"วัยหนุ่ม",
        description:"กินเหล้า",
        cover:"/images/profile2.jpg",
        icon:"/images/user.png",
        enrollment:false,
        checked:false
    },
    {
        id: 300,
        title:"วัยกลางคน",
        description:"เป็นหนี้",
        cover:"/images/profile3.jpg",
        icon:"/images/user.png",
        enrollment:false,
        checked:false
    }
];
function IsChecked({ chk }){
    if(chk)
        return (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
                 เปิดให้ลงทะเบียน(Open)
          </>
    );
    else
        return (
    <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
                ปิดลงทะเบียน(Closed)
          </>
    );
}


function Item({ id, title, des, enr, cover, icon, chk } : { id:number, title: string, des: string, enr: boolean, cover: string, icon: string, chk: boolean}){
    // console.log("key:",id)
    const[like,setLike]=useState(false);

    function handleClickLink(){
        if(like)
            setLike(false);
        else
            setLike(true);
    }



    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('${cover}')`}} title={title}>
  </div>
        
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <IsChecked chk={chk}/>
      </p>
      
      <div className="relative h-16 w-16">
        <button onClick={handleClickLink}>
            { like ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" fill="#dc2626" />
            </svg>
            ):(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"  />
                </svg>
            )
        }
        
                </button>
                </div>
      <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{des}</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={icon} title={title}/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Frint</p>
        <p className="text-gray-600">16/7/2024</p>
      </div>
    </div>
  </div>
</div>
    )
}
export default function ToDoLists () {
    const enrItem = todos.filter(subject =>
        subject.enrollment === true ||
        subject.enrollment === false
        
    )

    const items = enrItem.map((item,index) =>
        <Item key={index} id={item.id} title={item.title} chk={item.checked} cover={item.cover} icon={item.icon} des={item.description} enr={item.enrollment} />

    );
    return (
        <div className="p-5 bg-green-300">
        <h1 className="text-xl font-bold">My to do list</h1>
        <ul>{items}</ul>
        </div>
    );

}