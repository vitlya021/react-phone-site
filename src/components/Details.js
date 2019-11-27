import React from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class Details extends React.Component{
  render(){

    return(
      <ProductConsumer>
        {(value) =>{
          const{id, company, img, info, price, title, inCart} =
          value.detailProduct;

          return (
            <div className='container py-5'>
              {/* title*/}
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue'>
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end of title*/}
              {/* product imfo*/}
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3 '>
                  <img src={img} alt='1' className='img-fluid'/>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <h2>Model : {title}, </h2>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by : <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      price : <span>${price}</span>
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    some info about products
                  </p>
                  <p className='text-muted lead'>{info}</p>
                  {/*buttons*/}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>
                        Back to products
                      </ButtonContainer>
                      <ButtonContainer
                      cart
                      disabled={inCart? true: false}
                      onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id)
                      }}
                      >
                        {inCart? 'inCart': 'add to cart'}
                      </ButtonContainer>
                    </Link>
                  </div>
                  {/*end of buttons*/}

                </div>
              </div>
              {/* end of product info*/}

            </div>
          )
        }}

      </ProductConsumer>
    )
  }

}
