import AddEmployee from "./addEmployee";

function Home(props){
    return (
        <div className="container">
            <AddEmployee add={props.add}/>
        </div>
    )
}

export default Home;