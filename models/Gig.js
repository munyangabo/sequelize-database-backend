import { Sequelize } from "sequelize";
import { db } from "../app";

const Gig = db.define('gig', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contant_email: {
        type: Sequelize.STRING
    },
})

export {Gig}