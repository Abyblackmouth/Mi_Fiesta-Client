import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import clsx from 'clsx';
import Subtitle from './Subtitle';
import Button from './Button';
import { registerCustomer } from '../lib/api';

export default function FormCustomer() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const newData = {
      userName: data.userName,
      email: data.email,
      password: data.password,
      phoneNumbers: {
        fixed: data.fixed,
        mobile: data.mobile,
      },
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
    };

    console.log('data:', data);
    let resultado = await registerCustomer(newData);
    console.log('resultado:', resultado.newCustomer);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          'w-full',
          'background-color: rgba(255, 255, 255, 0.4)',
          'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)',
          // ' flex-direction:column content-center'
        )}
      >
        <div className={clsx('w-full')}>
          <Subtitle>Nombre y Contacto</Subtitle>

          <div className="flex grid-rows-1 gap-2">
            <Input
              htmlFor="userName"
              id="username"
              type="string"
              placeholder="Nombre de Usuario *"
              message="error"
              register={register}
            />
            <Input
              htmlFor="profilePicture"
              id="profilepicture"
              type="string"
              placeholder="Foto de perfil *"
              message="error"
              register={register}
            />
          </div>

          <div className="flex grid-rows-1 gap-2 mt-2">
            <Input
              htmlFor="fixed"
              id="fixed"
              type="tel"
              placeholder="Télefono 1 *"
              message="error"
              register={register}
            />
            <Input
              htmlFor="mobile"
              id="mobile"
              type="tel"
              placeholder="Celular *"
              message="error"
              register={register}
            />
          </div>
        </div>
        <div className={clsx('w-full')}>
          <Subtitle>Web</Subtitle>

          <div className="flex grid-rows-1 gap-2 mt-2">
            <Input htmlFor="email" id="email" type="string" placeholder="Email *" message="error" register={register} />
            <Input
              htmlFor="password"
              id="password"
              type="string"
              placeholder=" password *"
              message="error"
              register={register}
            />
          </div>
        </div>
        <div className={clsx('w-full')}>
          <Subtitle>Dirección</Subtitle>

          <div className="flex grid-rows-1 gap-2 mt-2">
            <Input
              htmlFor="street"
              id="street"
              type="string"
              placeholder="Calle y numero*"
              message="error"
              register={register}
            />
            <Input
              htmlFor="state"
              id="state"
              type="string"
              placeholder="Colonia *"
              message="error"
              register={register}
            />
            <Input htmlFor="city" id="city" type="string" placeholder="Ciudad *" message="error" register={register} />
            <Input htmlFor="zip" id="zip" type="string" placeholder="C.P. *" message="error" register={register} />
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <Button etiqueta="Guardar" isSubmit />
        </div>
      </form>
    </>
  );
}
