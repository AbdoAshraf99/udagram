import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
import dotenv from 'dotenv';
dotenv.config();
export const sequelize = new Sequelize(
  process.env.POSTGRES_CONFIG
);