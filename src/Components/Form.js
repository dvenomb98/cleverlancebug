import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {

  const [formData, setFormData] = React.useState({
    firstName: "", 
    lastName: "",
    rodneCislo: "",
    email: "",
    number: ""
  })

  const [formErrors, setFormErrors] = React.useState({})
  const [isSubmit, setIsSubmit] = React.useState(false)
  let navigate = useNavigate()

  function handleChange(event) {
    const {name, value, type} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}



function handleSubmit(event) {
  event.preventDefault()
  setFormErrors(validate(formData))
  setIsSubmit(true)
}

React.useEffect(() => {
  
  if(Object.keys(formErrors).length === 0 && isSubmit) {
    navigate("/hotovo") }

},[formErrors])

const validate = (values) => {
  const errors = {}
  const alphaRegex = /^([ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮĚÓa-zA-z]){0,20}$/
  

 
   if (!alphaRegex.test(values.firstName)) {
      errors.firstName ="Jméno obsahuje nepovolené znaky!"
    }
  
  if (!values.lastName) {
    errors.lastName = "Příjmení je vyžadováno!"
  }

  else if (values.lastName.length < 2) {
    errors.lastName = "Nedosažen minimální počet znaků!"
  }
  else if (values.lastName.length > 20) {
    errors.lastName = "Překročen maximálnííí počet znaků!"
  }

  if (!values.rodneCislo) {
    errors.rodneCislo = "Rodne cislo je vyzadovano!"
  }
  else if (values.rodneCislo.length !== 10)
  { errors.rodneCislo = "Nesprávné rodné číslo!"}

  if (!values.email) {
    errors.email = "Email je vyžadován!"
  }

  if (!values.number) {
    errors.number = "Telefon je vižadován!"
  }

  return errors;

}

  return (
    <div className="bg-slate-200/75 py-10 shadow-inner grow">
    <div className="w-2/3 xl:w-1/2 mx-auto flex flex-col items-start justify-center gap-10">
        <h3 className="font-bold text-xl">Zadejte základní údaje</h3>

        <form onSubmit={handleSubmit} className="flex flex-col w-full text-lg ">

          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between lg:items-center">
            <label htmlFor="name">Jmeno</label>
            <input className={`lg:w-1/2 bg-white  border ${formErrors.firstName ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="name" type="text" placeholder="Daniel" name="firstName" value={formData.firstName}/>
          </div>
          <p className="text-red-600 mt-2 font-light self-end">{formErrors.firstName}</p>
          

          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-center">
            <label htmlFor="lastName">Příjmení</label>
            <input className={` lg:w-1/2 bg-white    border ${formErrors.lastName ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="lastName" type="text" placeholder="Bílek" name="lastName" value={formData.lastName} />
          </div>
          <p className="text-red-600 mt-2 font-light self-end">{formErrors.lastName}</p>
          
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-center">
            <label htmlFor="rc">Rodnéé číslo:</label>
            <input className={`lg:w-1/2 bg-white  border ${formErrors.rodneCislo ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="rc" type="number" placeholder="9809103322" name="rodneCislo" value={formData.rodneCislo}  /> 
          </div>
          <p className="text-red-600 mt-2 font-light self-end">{formErrors.rodneCislo}</p>
          
          
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-center">
            <label htmlFor="email">Email</label>
            <input className={`lg:w-1/2 bg-white   border ${formErrors.email ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="email" type="text" placeholder="mujemail@seznam.cz" name="email" value={formData.email} />  
          </div>
          <p className="text-red-600 mt-2 font-light self-end">{formErrors.email}</p>
          

          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-center">
            <label htmlFor="telefon">Telefon</label>
            <label className="lg:w-1/2 w-full relative" >
              <input className={` w-full bg-white   border ${formErrors.number? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 pl-20 px-5 py-2 rounded-sm`} onChange={handleChange} id="telefon" type="number" placeholder="774500143" name="number" value={formData.number}  />
              <span className="absolute left-5 top-[8.5px] font-bold">+420</span> 
            </label>
          </div>
          <p className="text-red-600 mt-2 font-light self-end">{formErrors.number}</p>
          

          <p className="text-center pt-5 mt-10 border-t border-gray-300">Ověřte prosím Vaše telefonní číslo pomocí SMS kódu, který Vám zdarma zašleme.</p>
          <button className=" mt-5 uppercase bg-yellow-300 py-3 px-5 font-bold self-center rounded-sm hover:scale-105 transition ease-in-out">ZASLAT OVĚŘOVACÍ kód</button>
        </form>

        
    
        </div>
    </div>
  )
}

export default Form