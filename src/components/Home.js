import AddEmployee from "./addemployee";
import Display from "./displayName";


function Home(props){

    const displayName =(props) =>{
        const{displayName,deleteEmployee} =props;
    }
    return(
        <div className="container">
            <AddEmployee add={props.add} deleteEmployee/>
            <Display list={props.list} deleteEmployee/>
        </div>
    )
}

export default Home;