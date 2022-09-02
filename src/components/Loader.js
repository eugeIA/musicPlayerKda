import React from 'react';
import { Triangle } from  'react-loader-spinner'


function Loader(){
    return(
        <div>
            <Triangle
            height="80"
            width="80"
            color="#f0260f"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
        </div>

        
    )
}

export default Loader;