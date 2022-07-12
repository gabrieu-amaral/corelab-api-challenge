import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { IVehicle } from 'App/Types/Vehicle'

let vehicles: IVehicle[] = [
  {
    id: 1,
    name: 'First Vehicle',
    description: 'This is a description of first vehicle',
    plate: 'DDT-0012',
    isFavorite: false,
    year: 2018,
    color: '#ff00ff',
    price: 22000,
    createdAt: new Date(),
  },

  {
    
    id: 2,
    name: 'Gol',
    description: 'This is a description of first vehicle 2',
    plate: 'DDT-0013',
    isFavorite: false,
    year: 2012,
    color: '#3d3d3d',
    price: 23000,
    createdAt: new Date(),
  },

  {    
    id: 3,
    name: 'Celta',
    description: 'This is a description of first vehicle 3',
    plate: 'ABT-5512',
    isFavorite: false,
    year: 2008,
    color: '#ff5269',
    price: 15000,
    createdAt: new Date(),
  }
]

export default class VehiclesController {
  public async index(ctx: HttpContextContract) {

    return vehicles
  }

  public async create({ request, response }) {
    request.requestBody.id = Math.random()
    vehicles.push(request.requestBody) 
    console.log(vehicles)
    return response
  }

  public async favorite({ params, response }) {
    let vehicle:any = vehicles.find((vehicle) => vehicle.id == params.id)
    vehicle.isFavorite = !vehicle.isFavorite
    return response
  }

  public async destroy({ params, response }) {
    vehicles = vehicles.filter((vehicle) => vehicle.id != params.id)
    return response
  }

  public async edit({request, params, response}) {
    vehicles = vehicles.map((vehicle) => {
      if(vehicle.id == params.id) {
        vehicle=request.requestBody
      }

      return vehicle
    })
    

    return response

  }
}
