const ApiError = require("../error/ApiError")
const {User}=require('../models/models')



class UserController{
  async registration(req,res,next){
    const {nick} = req.body
    if(!nick){
      return next(ApiError.badRequest('Некоректный nick или password'))
    }
    const candidate = await User.findOne({where:{nick}})
    if(candidate){
      return next(ApiError.badRequest('Пользователь с таким nick уже существует'))
    }
    const user = await User.create({nick})
    return res.json({user})
  }
  async login(req,res, next){
    const {nick} = req.body
    const user = await User.findOne({where:{nick}})
    if(!user){
      return next(ApiError.internal('Пользователь не найден'))
    }
    return res.json({user})
  }
  async check(req,res,next){
    const {id} = req.query
    if(!id){
      next(ApiError.badRequest('Не задан ID'))
    }
  }
  async create(req,res){
    const {id, score} = req.body
    const game = await User.update({score},{where:{id}})
    return res.json(game)

  }
  async getAll(req,res){
    const users = await User.findAll()
    return res.json(users)
  }

}

module.exports = new UserController()