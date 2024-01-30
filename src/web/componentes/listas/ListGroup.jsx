import { useEffect, useState, useCallback } from "react"
import { getProductos } from "../../api/producto.api"
import 'devextreme/dist/css/dx.light.css';

import DataGrid, {
  Column,
  Editing,
  Paging,
  Selection,
  Toolbar,
  Item,
} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';


export const ListGroup = () => {
    const [selectedItemKeys, setSelectedItemKeys] = useState([]);
    const [listaProducto , setListaProducto] = useState([]);
    const deleteRecords = useCallback(() => {
        selectedItemKeys.forEach((key) => {
            dataSource.store().remove(key);
        });
        setSelectedItemKeys([]);
        dataSource.reload();
    }, [selectedItemKeys]);

    useEffect(() => {
        const buscaProducto = async ()=>{
            const {data} = await getProductos();
            if(data!=0){
                setListaProducto(data);
            }
            console.log(data);
        }
        buscaProducto();
    },[]);


    const dataSource = new DataSource({
        store: new ArrayStore({
            data: listaProducto,
            key: 'id',
        }),
    });

  const onSelectionChanged = useCallback((data) => {
    setSelectedItemKeys(data.selectedRowKeys);
  }, []);
  return (
    <div className="container text-center  ">
    <div id="data-grid-demo">
      <DataGrid
        id="gridContainer"
        dataSource={dataSource}
        showBorders={true}
        selectedRowKeys={selectedItemKeys}
        onSelectionChanged={onSelectionChanged}
      >
        <Selection mode="multiple" />
        <Paging enabled={false} />
        <Editing
          mode="cell"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        />

        <Column
          dataField="id"
        />
        <Column dataField="name" 
            caption="Title"
        />
        <Column dataField="descripcion" />
        <Column
          dataField="photo_id"
        />
        <Column
          dataField="fecha_alta"
          dataType="date"
        />
        <Toolbar>
          <Item
            name="addRowButton"
            showText="always"
          />
          <Item location="after">
            <Button
              onClick={deleteRecords}
              icon="trash"
              disabled={!selectedItemKeys.length}
              text="Delete Selected Records"
            />
          </Item>
        </Toolbar>
      </DataGrid>
    </div>
    </div>
  );
};






// import DataGrid, { Editing, Paging, Selection } from 'devextreme-react/data-grid';

// const columns = ['id', 'name', 'descripcion', 'fecha_alta', 'photo_id','price','category_id','stock'];

// export const ListGroup = ()=> {
    
//     const [listaProducto , setListaProducto] = useState([]);



//   return (
    //     <>
//         <div className="container text-center px-4 p-3 ">
//             <DataGrid
//             dataSource={listaProducto}
//             defaultColumns={columns}
//             showBorders={true}
//         />
//          <Selection mode="multiple" />
//         <Paging enabled={false} />
//         <Editing
//           mode="cell"
//           allowUpdating={true}
//           allowAdding={true}
//           allowDeleting={true} />
//         </div>


//     </>
//   )
// }
