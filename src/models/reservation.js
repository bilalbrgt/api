module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      titre: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      prix: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      lieu: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      destinations: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: true
        }
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      }
    },
    {
      tableName: "reservations"
    }
  );

  Reservation.associate = () => {};

  return Reservation;
};
