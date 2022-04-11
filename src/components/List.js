import Item from "./Item";

function List(){
    return(
        <>
            <ul>
                <Item marca="Ferrari" lancamento={1999}/>
                <Item marca="Corsa" lancamento={1964}/>
                <Item marca="Uno" lancamento={1958}/>
                <Item/>
            </ul>
        </>
    );
}

export default List;