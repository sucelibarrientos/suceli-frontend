import React,{useState,useEffect} from "react"
import axios from "axios";
export const Todos=() => {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET cuando el componente se monte
    axios.get('https://todo-api-h8ov.onrender.com/api')
      .then(response => {
        console.log("response.data",response.data)
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);
  useEffect(() => {
         console.log(data)
  },[data]);
    return(
        <div className="container mt-4 mx-auto principal">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        
                    </tr>
                </thead>
                <tbody>
                        {
                            data && data.map((el)=>{

                                return(
                                    <>
                                    <tr>
                                    <td key={el.id}>{el.id}</td>
                                    <td>{el.title}</td>
                                    <td>{el.description}</td>
                                    </tr>
                                    
                                    </>
                                )
                            })  
                        }
                </tbody>
            </table>

        </div>
    )
}
    