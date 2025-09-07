import api from '../services/fakestore-api';

export default function Shop(){
    return(
        <div>
            <h1>Shop</h1>
            <button onClick={api}>Generate Products</button>
        </div>
    )
}