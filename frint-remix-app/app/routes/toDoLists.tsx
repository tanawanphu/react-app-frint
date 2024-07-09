const todos =[
    {
        id: 100,
        title:"เรียนจบ",
        checked:true
    },
    {
        id: 200,
        title:"ทำงาน",
        checked:false
    },
    {
        id: 300,
        title:"ใช้หนี้",
        checked:false
    }
];
function Item({ title, chk } : { title: string,chk: boolean}){
    if(chk)
        return <li className="item">{title}✔️</li>;
    else
        return <li className="item">{title}</li>;
}
export default function ToDoLists () {
    const items = todos.map(item =>
        <Item title={item.title} chk={item.checked}/>

    );
    return (
        <>
        <h1>My to do list</h1>
        <ul>{items}</ul>
        </>
    );

}