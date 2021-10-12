import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data =>{

    } ;
    return (
        <div className='form-area'>
            <div>
            <h4>this is shipping</h4>
    <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue={user.email} {...register("email")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input defaultValue={user.displayName }{...register("address")} />
      <input defaultValue="city" {...register("city")} />
      <input defaultValue="phone" {...register("phone")} />
      <input type="submit" />
    </form>
    </div>
        </div>
    );
};

export default Shipping;