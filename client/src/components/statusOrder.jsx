export default function StatusOrder(props){
    if(props.value === "0"){
        return (<span className="badge rounded-pill bg-warning text-dark w-75">Pendiente</span>)
      }else if(props.value === "1"){
        return (<span className="badge rounded-pill bg-success w-75">Lista</span>)
      }else{
        return (<span className="badge rounded-pill bg-danger w-75">Cancelada</span>)
      }
}
