import React, {useState, useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { FirebaseContext } from '../../firebase';
import Platillo from '../ui/Platillo';

const Menu = () => {

  //Definimos el state para los platillos
  const [platillos, guardarPlatillos] = useState([])

  const { firebase } = useContext(FirebaseContext);

  //Consultar la base de datos al cargar
  useEffect(() => {
    const obtenerPlatillos = async () => {
      const resultado = await firebase.db.collection('productos').onSnapshot(manejarSnapshot)
    }
    obtenerPlatillos();
  }, [])

  //Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    //Almacenar resultados en el state
    guardarPlatillos(platillos)
  }

  return (
    <>
      <h1 className='text-3xl font-light mb-4'>Menu</h1>
      <NavLink to='/nuevo-platillo' className='bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold'>
        Agregar Platillo
      </NavLink>

      {platillos.map(platillo => (
        <Platillo
          key={platillo.id}
          platillo={platillo}
        />
      ))}
    </>
  )
}

export default Menu
