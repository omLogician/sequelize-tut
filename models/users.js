module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define("users", {
        name: DataTypes.STRING,
        email:DataTypes.STRING,
        gender:DataTypes.STRING
    },
    {
        paranoid:true,
        deletedAt:'softDelete',
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
    )
}