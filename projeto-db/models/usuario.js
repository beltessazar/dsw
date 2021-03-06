const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true, 
      comment: null,
      field: "id",
      unique: "id"
    },
    dataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dataNascimento"
    },
    nacionalidade: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nacionalidade"
    },
    endereco: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "endereco"
    },
    bairro: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bairro"
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cidade"
    },
    telefone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "telefone"
    },
    grupoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "grupoId",
      references: {
        key: "id",
        model: "gruposModel"
      }
    }
  };
  const options = {
    tableName: "usuario",
    comment: "",
    indexes: [{
      name: "grupoId",
      unique: false,
      type: "BTREE",
      fields: ["grupoId"]
    }]
  };
  const UsuarioModel = sequelize.define("usuarioModel", attributes, options);
  return UsuarioModel;
};